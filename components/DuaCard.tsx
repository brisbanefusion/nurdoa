
import React, { useState, useRef } from 'react';
import { Dua } from '../types';
import { BookOpen, Copy, Check, Info, Volume2, VolumeX, Loader2, Book, Star, Sun, Infinity, Sunrise, MoonStar, ScrollText } from 'lucide-react';
import { generateSpeech } from '../services/geminiService';

interface DuaCardProps {
  dua: Dua;
}

const DuaCard: React.FC<DuaCardProps> = ({ dua }) => {
  const [copied, setCopied] = useState(false);
  const [showBenefit, setShowBenefit] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);

  const copyToClipboard = () => {
    const text = `${dua.title}\n\n${dua.arabic}\n\nMakna: ${dua.translation}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleAudio = async () => {
    if (isPlaying) {
      if (sourceNodeRef.current) {
        sourceNodeRef.current.stop();
        sourceNodeRef.current = null;
      }
      setIsPlaying(false);
      return;
    }

    try {
      setIsLoadingAudio(true);
      const audioBuffer = await generateSpeech(dua.arabic);
      
      if (!audioBuffer) {
        throw new Error("Gagal menghasilkan audio");
      }

      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }

      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      
      source.onended = () => {
        setIsPlaying(false);
        sourceNodeRef.current = null;
      };

      sourceNodeRef.current = source;
      source.start(0);
      setIsPlaying(true);
    } catch (error) {
      console.error("Audio Playback Error:", error);
      alert("Maaf, audio tidak dapat dimainkan buat masa ini.");
    } finally {
      setIsLoadingAudio(false);
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'Wajib': return { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-400', icon: <Book size={12} /> };
      case 'Sunat': return { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-400', icon: <Star size={12} /> };
      case 'Harian': return { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-400', icon: <Sun size={12} /> };
      case 'Zikir': return { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-700 dark:text-indigo-400', icon: <Infinity size={12} /> };
      case 'Pagi': return { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-400', icon: <Sunrise size={12} /> };
      case 'Ramadan': return { bg: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-700 dark:text-violet-400', icon: <MoonStar size={12} /> };
      case 'Hadis': return { bg: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-700 dark:text-cyan-400', icon: <ScrollText size={12} /> };
      default: return { bg: 'bg-slate-100 dark:bg-slate-800', text: 'text-slate-700 dark:text-slate-300', icon: <Info size={12} /> };
    }
  };

  const styles = getCategoryStyles(dua.category);

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-all hover:shadow-md`}>
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-6">
          <span className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles.bg} ${styles.text}`}>
            {styles.icon}
            {dua.category}
          </span>
          <div className="flex gap-2">
            <button 
              onClick={handleToggleAudio}
              disabled={isLoadingAudio}
              className={`p-2.5 rounded-xl transition-all ${
                isPlaying 
                ? 'text-white bg-slate-900 dark:bg-white dark:text-slate-900 shadow-lg' 
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isPlaying ? "Berhenti" : "Dengar Bacaan"}
            >
              {isLoadingAudio ? (
                <Loader2 size={20} className="animate-spin" />
              ) : isPlaying ? (
                <VolumeX size={20} />
              ) : (
                <Volume2 size={20} />
              )}
            </button>
            <button 
              onClick={() => setShowBenefit(!showBenefit)}
              className="p-2.5 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              title="Info Lanjut"
            >
              <Info size={20} />
            </button>
            <button 
              onClick={copyToClipboard}
              className="p-2.5 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              title="Salin"
            >
              {copied ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} />}
            </button>
          </div>
        </div>

        <h3 className={`text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2`}>
          {dua.category === 'Hadis' ? <ScrollText size={22} className="text-cyan-500" /> : <BookOpen size={22} className="text-emerald-500" />}
          {dua.title}
        </h3>

        <div className={`arabic-text text-3xl md:text-5xl leading-[2] text-right mb-8 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 transition-all ${isPlaying ? 'ring-4 ring-slate-900/5 dark:ring-white/5 border-slate-300 dark:border-slate-600' : ''}`}>
          {dua.arabic}
        </div>

        <div className="space-y-6">
          <div>
            <h4 className={`text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50 dark:text-white`}>Terjemahan</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg font-medium italic">
              "{dua.translation}"
            </p>
          </div>
          
          {showBenefit && dua.benefit && (
            <div className={`p-6 rounded-2xl border animate-in fade-in slide-in-from-top-4 duration-500 bg-slate-50 dark:bg-slate-800/30 border-slate-100 dark:border-slate-800`}>
              <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2 dark:text-white opacity-50">Huraian & Hikmah</h4>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {dua.benefit}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DuaCard;

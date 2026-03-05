
import React, { useState } from 'react';
import { Moon, Sun, Search, Palette, Check } from 'lucide-react';
import { ThemeColor } from '../types';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  theme: ThemeColor;
  setTheme: (val: ThemeColor) => void;
  isDark: boolean;
  toggleDark: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm, theme, setTheme, isDark, toggleDark }) => {
  const [showThemePicker, setShowThemePicker] = useState(false);

  const themes: { id: ThemeColor; label: string; color: string }[] = [
    { id: 'emerald', label: 'Emerald', color: 'bg-emerald-500' },
    { id: 'ocean', label: 'Ocean', color: 'bg-cyan-500' },
    { id: 'sunset', label: 'Sunset', color: 'bg-amber-500' },
    { id: 'lavender', label: 'Lavender', color: 'bg-violet-500' },
  ];

  const getThemeColor = () => {
    switch (theme) {
      case 'ocean': return 'emerald-600'; // Defaulting to emerald for brand if needed, or dynamic
      default: return `${theme}-600`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg transition-colors ${
            theme === 'emerald' ? 'bg-emerald-600 shadow-emerald-200' :
            theme === 'ocean' ? 'bg-cyan-600 shadow-cyan-200' :
            theme === 'sunset' ? 'bg-amber-600 shadow-amber-200' :
            'bg-violet-600 shadow-violet-200'
          }`}>
            <Moon fill="currentColor" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white leading-none">NurDoa</h1>
            <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${
              theme === 'emerald' ? 'text-emerald-600' :
              theme === 'ocean' ? 'text-cyan-600' :
              theme === 'sunset' ? 'text-amber-600' :
              'text-violet-600'
            }`}>Penerang Hati</p>
          </div>
        </div>

        <div className="flex-1 max-w-md relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="Cari doa (cth: ibu bapa, ampun...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 dark:text-white border-none rounded-full text-sm focus:ring-2 transition-all outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button 
              onClick={() => setShowThemePicker(!showThemePicker)}
              className="w-10 h-10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <Palette size={20} />
            </button>
            
            {showThemePicker && (
              <div className="absolute right-0 mt-2 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 w-48 animate-in fade-in zoom-in-95 duration-200">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Pilih Tema</p>
                <div className="grid grid-cols-1 gap-1">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setTheme(t.id); setShowThemePicker(false); }}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${
                        theme === t.id ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${t.color}`}></div>
                        {t.label}
                      </div>
                      {theme === t.id && <Check size={14} />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={toggleDark}
            className="w-10 h-10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="Cari doa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-slate-800 dark:text-white border-none rounded-2xl text-sm focus:ring-2 transition-all outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;


import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import DuaCard from './components/DuaCard';
import { COMMON_DUAS } from './constants';
import { ChatMessage, ThemeColor } from './types';
import { generateCustomDua, chatWithUstaz } from './services/geminiService';
import { 
  Send, Sparkles, MessageCircle, List, ArrowRight, Loader2, 
  Moon, Filter, Book, Star, Sun, Infinity, LayoutGrid, Sunrise, MoonStar, 
  BookOpen, BrainCircuit, ScrollText
} from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'collection' | 'ramadan' | 'hadis' | 'zikir' | 'ai'>('collection');
  const [selectedCategory, setSelectedCategory] = useState<'Semua' | 'Wajib' | 'Sunat' | 'Pagi' | 'Harian'>('Semua');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [customDuaInput, setCustomDuaInput] = useState('');
  const [generatedResult, setGeneratedResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Theme State
  const [theme, setTheme] = useState<ThemeColor>(() => {
    return (localStorage.getItem('theme-color') as ThemeColor) || 'emerald';
  });
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme-dark') === 'true';
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping]);

  useEffect(() => {
    localStorage.setItem('theme-color', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme-dark', String(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  const getThemeClass = (type: 'bg' | 'text' | 'border' | 'shadow' | 'ring' | 'hover-bg', intensity: number = 600) => {
    const colorMap = {
      emerald: 'emerald',
      ocean: 'cyan',
      sunset: 'amber',
      lavender: 'violet'
    };
    const c = colorMap[theme];
    if (type === 'bg') return `bg-${c}-${intensity}`;
    if (type === 'text') return `text-${c}-${intensity}`;
    if (type === 'border') return `border-${c}-${intensity}`;
    if (type === 'shadow') return `shadow-${c}-${intensity}`;
    if (type === 'ring') return `focus:ring-${c}-${intensity}`;
    if (type === 'hover-bg') return `hover:bg-${c}-${intensity}`;
    return '';
  };

  // Logic to filter content based on active tab and category
  const filteredDuas = COMMON_DUAS.filter(dua => {
    const matchesSearch = dua.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dua.translation.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;

    if (activeTab === 'collection') {
      const isCollectionCategory = ['Wajib', 'Sunat', 'Pagi', 'Harian'].includes(dua.category);
      const matchesSubCategory = selectedCategory === 'Semua' || dua.category === selectedCategory;
      return isCollectionCategory && matchesSubCategory;
    }
    
    if (activeTab === 'ramadan') return dua.category === 'Ramadan';
    if (activeTab === 'hadis') return dua.category === 'Hadis';
    if (activeTab === 'zikir') return dua.category === 'Zikir';

    return false;
  });

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: chatInput, timestamp: Date.now() };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsTyping(true);

    const response = await chatWithUstaz(chatInput, chatMessages.map(m => ({ role: m.role, text: m.text })));
    
    const modelMsg: ChatMessage = { role: 'model', text: response, timestamp: Date.now() };
    setChatMessages(prev => [...prev, modelMsg]);
    setIsTyping(false);
  };

  const handleGenerateDua = async () => {
    if (!customDuaInput.trim()) return;
    setIsGenerating(true);
    setGeneratedResult('');
    const result = await generateCustomDua(customDuaInput);
    setGeneratedResult(result);
    setIsGenerating(false);
  };

  const mainTabs = [
    { id: 'collection', label: 'Doa', icon: <List size={20} /> },
    { id: 'ramadan', label: 'Ramadan', icon: <MoonStar size={20} /> },
    { id: 'hadis', label: 'Hadis 40', icon: <ScrollText size={20} /> },
    { id: 'zikir', label: 'Zikir', icon: <Infinity size={20} /> },
    { id: 'ai', label: 'AI Ustaz', icon: <BrainCircuit size={20} /> },
  ] as const;

  const collectionCategories = [
    { name: 'Semua', icon: <LayoutGrid size={16} /> },
    { name: 'Wajib', icon: <Book size={16} /> },
    { name: 'Sunat', icon: <Star size={16} /> },
    { name: 'Pagi', icon: <Sunrise size={16} /> },
    { name: 'Harian', icon: <Sun size={16} /> },
  ] as const;

  const themePrimaryBg = getThemeClass('bg', 600);
  const themePrimaryText = getThemeClass('text', 600);
  const themeSoftBg = getThemeClass('bg', 100);
  const themeSoftText = getThemeClass('text', 700);
  const themeSoftBorder = getThemeClass('border', 200);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 pb-24 md:pb-0 transition-colors duration-300">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        theme={theme} 
        setTheme={setTheme}
        isDark={isDark}
        toggleDark={toggleDark}
      />

      <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-8">
        
        {/* Main Navigation Tabs */}
        <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 mb-8 sticky top-24 z-40 overflow-x-auto scrollbar-hide">
          {mainTabs.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-3 px-4 rounded-xl text-xs md:text-sm font-bold transition-all min-w-[80px] ${
                activeTab === tab.id 
                ? `${themePrimaryBg} text-white shadow-lg` 
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* KOLEKSI TAB */}
          {activeTab === 'collection' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {collectionCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name as any)}
                    className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      selectedCategory === cat.name
                        ? `${themeSoftBg} ${themeSoftText} border ${themeSoftBorder} shadow-sm dark:bg-slate-800 dark:text-white dark:border-slate-700`
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-6">
                {filteredDuas.map(dua => <DuaCard key={dua.id} dua={dua} />)}
              </div>
            </div>
          )}

          {/* RAMADAN TAB */}
          {activeTab === 'ramadan' && (
            <div className="space-y-8">
              <div className="bg-violet-600 text-white p-8 rounded-3xl shadow-xl shadow-violet-100 dark:shadow-none flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <MoonStar size={32} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold">Istimewa Ramadan</h3>
                  <p className="text-violet-100">Koleksi doa khusus untuk bulan Ramadan yang penuh barakah.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {filteredDuas.map(dua => <DuaCard key={dua.id} dua={dua} />)}
              </div>
            </div>
          )}

          {/* HADIS TAB */}
          {activeTab === 'hadis' && (
            <div className="space-y-8">
              <div className="bg-cyan-600 text-white p-8 rounded-3xl shadow-xl shadow-cyan-100 dark:shadow-none flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <ScrollText size={32} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold">Hadis 40 (Arba'in)</h3>
                  <p className="text-cyan-100">Himpunan hadis asas yang merumuskan keindahan ajaran Islam oleh Imam Nawawi.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {filteredDuas.map(dua => <DuaCard key={dua.id} dua={dua} />)}
              </div>
            </div>
          )}

          {/* ZIKIR TAB */}
          {activeTab === 'zikir' && (
            <div className="space-y-8">
              <div className="bg-indigo-600 text-white p-8 rounded-3xl shadow-xl shadow-indigo-100 dark:shadow-none flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <Infinity size={32} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold">Basahkan Lidah</h3>
                  <p className="text-indigo-100">Ketenangan jiwa melalui zikir harian yang istiqamah.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDuas.map(dua => <DuaCard key={dua.id} dua={dua} />)}
              </div>
            </div>
          )}

          {/* AI USTAZ HUB */}
          {activeTab === 'ai' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Chat Section */}
              <div className="lg:col-span-7 flex flex-col h-[600px] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors">
                <div className={`p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3 ${isDark ? 'bg-slate-800/50' : themeSoftBg + '/30'}`}>
                  <div className={`w-10 h-10 rounded-full ${themePrimaryBg} flex items-center justify-center text-white font-bold`}>U</div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white leading-none">Ustaz Nur AI</h4>
                    <p className={`text-[10px] ${themePrimaryText} mt-1 font-bold`}>• Sedia Membantu</p>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                  {chatMessages.length === 0 && (
                    <div className="text-center py-12 px-6">
                      <div className={`w-16 h-16 ${isDark ? 'bg-slate-800 text-slate-400' : themeSoftBg + ' ' + themePrimaryText} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <MessageCircle size={32} />
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Tanyakan sebarang soalan mengenai adab, hukum, atau maksud doa.</p>
                    </div>
                  )}
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-4 rounded-2xl ${msg.role === 'user' ? `${themePrimaryBg} text-white rounded-tr-none` : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-slate-700'}`}>
                        <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 flex gap-1">
                        <div className={`w-2 h-2 ${themePrimaryBg} rounded-full animate-bounce opacity-40`}></div>
                        <div className={`w-2 h-2 ${themePrimaryBg} rounded-full animate-bounce delay-75 opacity-40`}></div>
                        <div className={`w-2 h-2 ${themePrimaryBg} rounded-full animate-bounce delay-150 opacity-40`}></div>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
                <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="Tanya soalan..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="w-full pl-4 pr-14 py-4 bg-slate-100 dark:bg-slate-800 dark:text-white rounded-2xl outline-none focus:ring-2 transition-all text-sm border-none"
                    />
                    <button onClick={handleSendMessage} className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 ${themePrimaryBg} text-white rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity`}>
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Generator Section */}
              <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${isDark ? 'bg-slate-800 text-slate-400' : themeSoftBg + ' ' + themePrimaryText} rounded-full flex items-center justify-center`}>
                    <Sparkles size={20} />
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white">Bina Doa Khas</h3>
                </div>
                <textarea 
                  placeholder="Ceritakan perasaan atau keperluan anda..."
                  value={customDuaInput}
                  onChange={(e) => setCustomDuaInput(e.target.value)}
                  className="w-full h-32 p-4 bg-slate-50 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 outline-none resize-none transition-all text-sm mb-4"
                />
                <button 
                  onClick={handleGenerateDua}
                  disabled={isGenerating || !customDuaInput.trim()}
                  className={`w-full ${themePrimaryBg} hover:opacity-90 disabled:bg-slate-300 dark:disabled:bg-slate-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg`}
                >
                  {isGenerating ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                  Hasilkan Doa
                </button>
                {generatedResult && (
                  <div className={`mt-6 p-4 rounded-2xl border animate-in fade-in duration-500 ${isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : themeSoftBg + ' border-' + theme + '-100 text-slate-800'}`}>
                    <div className="whitespace-pre-wrap text-sm leading-relaxed italic">{generatedResult}</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Nav for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-2 py-3 flex justify-around items-center z-50 transition-colors">
        {mainTabs.map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex flex-col items-center p-2 rounded-xl transition-colors ${activeTab === tab.id ? themePrimaryText : 'text-slate-400 dark:text-slate-500'}`}
          >
            {tab.icon}
            <span className="text-[10px] font-bold mt-1">{tab.label}</span>
          </button>
        ))}
      </nav>

      <footer className="hidden md:block mt-12 py-12 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-center transition-colors">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm text-slate-400 dark:text-slate-500">&copy; 2024 NurDoa. Hubungi jiwa dengan Ilahi.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

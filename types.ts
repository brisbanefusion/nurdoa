
export interface Dua {
  id: string;
  title: string;
  arabic: string;
  transliteration?: string;
  translation: string;
  category: 'Wajib' | 'Sunat' | 'Harian' | 'Zikir' | 'Pagi' | 'Ramadan' | 'Hadis';
  benefit?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ThemeColor = 'emerald' | 'ocean' | 'sunset' | 'lavender';

export interface ThemeConfig {
  color: ThemeColor;
  isDark: boolean;
}

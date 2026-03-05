
import { GoogleGenAI, Type, Modality } from "@google/genai";

// Initialization following guidelines
export const generateCustomDua = async (userIntent: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Anda adalah seorang ustaz/pakar agama yang bijaksana. Berdasarkan hajat atau perasaan user berikut: "${userIntent}", sila berikan satu doa yang sesuai dalam bahasa Arab, sertakan teks transliterasi, dan terangkan makna serta hikmah doa tersebut dalam Bahasa Melayu. Format jawapan anda dalam bentuk Markdown yang cantik.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.8,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating custom dua:", error);
    return "Maaf, sistem sedang sibuk. Sila cuba sebentar lagi.";
  }
};

export const chatWithUstaz = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    history: history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    })),
    config: {
      systemInstruction: 'Anda adalah "Ustaz Nur", pembantu maya yang memberikan bimbingan mengenai doa-doa harian dan adab solat dalam Islam. Jawab dengan penuh sopan, menggunakan Bahasa Melayu yang baik. Sentiasa sertakan petikan ayat al-Quran atau hadis jika relevan.',
    }
  });

  try {
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error in chat:", error);
    return "Saya minta maaf, ada gangguan talian buat masa ini. Jom kita zikir dahulu.";
  }
};

/**
 * Generates audio for the given Arabic text using Gemini TTS.
 */
export const generateSpeech = async (text: string): Promise<AudioBuffer | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Recite the following Arabic prayer clearly and solemnly: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Puck' }, // Changed to male voice 'Puck'
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) return null;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    const audioData = decode(base64Audio);
    return await decodeAudioData(audioData, audioContext, 24000, 1);
  } catch (error) {
    console.error("Error generating speech:", error);
    return null;
  }
};

// --- Audio Decoding Utilities per SDK guidelines ---

function decode(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

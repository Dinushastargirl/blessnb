
import { GoogleGenAI, Type } from "@google/genai";

// Fix: Initializing GoogleGenAI strictly following the guideline: const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateGiftStoryTheme = async (interests: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Suggest a creative and emotional theme for a digital birthday website for someone who loves: ${interests}. 
               Format the response as a short, elegant title and a 2-sentence emotional pitch.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          themeTitle: { type: Type.STRING },
          pitch: { type: Type.STRING },
        },
        required: ["themeTitle", "pitch"]
      }
    }
  });

  // Fix: Access response.text as a property and handle potential undefined before parsing
  const jsonStr = response.text?.trim() || '{}';
  return JSON.parse(jsonStr);
};
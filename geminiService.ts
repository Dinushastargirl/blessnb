
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the GoogleGenAI client using the direct process.env.API_KEY as per guidelines
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
          themeTitle: {
            type: Type.STRING,
            description: 'The creative title for the gift story theme.',
          },
          pitch: {
            type: Type.STRING,
            description: 'A 2-sentence emotional pitch for the theme.',
          },
        },
        required: ["themeTitle", "pitch"],
      },
    },
  });

  // Use the .text property directly (not as a function) as it is a getter
  const jsonStr = response.text?.trim() || '{}';
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error("Failed to parse JSON response:", jsonStr);
    return { themeTitle: "A Timeless Journey", pitch: "A beautiful celebration of memories and love designed just for them." };
  }
};

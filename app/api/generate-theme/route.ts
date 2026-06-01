import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the GoogleGenAI client securely on the server
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { interests } = await req.json();
    if (!interests || typeof interests !== 'string') {
      return NextResponse.json({ error: 'Interests are required' }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
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

    const jsonStr = response.text?.trim() || '{}';
    const data = JSON.parse(jsonStr);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Gemini service error:", error);
    return NextResponse.json(
      { themeTitle: "A Timeless Journey", pitch: "A beautiful celebration of memories and love designed just for them." },
      { status: 200 } // Fallback return with success to keep user experience smooth
    );
  }
}

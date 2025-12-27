
import { GoogleGenAI, Type } from "@google/genai";
import { BioRequest, GeneratedBio } from "../types";

export const generateBios = async (params: BioRequest): Promise<GeneratedBio[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `Generate 5 creative TikTok bios based on the following:
    Niche: ${params.niche}
    Keywords: ${params.keywords}
    Style: ${params.style}
    Include Emojis: ${params.includeEmojis ? 'Yes' : 'No'}
    Length: ${params.length}
    
    Make them catchy, relatable, and optimized for TikTok. 
    Ensure they vary in tone (some punchy, some descriptive).
    Maximum length should be around 80 characters per bio as per TikTok limits.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              content: {
                type: Type.STRING,
                description: 'The generated bio text.',
              },
              category: {
                type: Type.STRING,
                description: 'A label for the style of this specific bio.',
              },
            },
            required: ["content", "category"],
          },
        },
      },
    });

    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate bios. Please try again.");
  }
};

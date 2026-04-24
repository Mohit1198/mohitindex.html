import { GoogleGenAI, Type } from "@google/genai";
import { Project } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function extractProjectsFromBehance(data: string | any): Promise<Project[]> {
  const dataStr = typeof data === 'string' ? data : JSON.stringify(data);
  
  const prompt = `Extract the latest 6 design projects from this data (can be HTML or JSON from a Behance profile).
  Return an array of exactly 6 project objects with these fields matching the Project interface:
  - id: unique string ID
  - title: project title
  - cat: main category (e.g. Social Media Design, Brand Identity)
  - img: high-quality cover image URL
  - desc: a brief 1-2 sentence description
  - link: full URL to the behance gallery
  - tools: array of tools used (e.g. ["Adobe Photoshop", "Adobe Illustrator"])
  - sub: short subtitle (e.g. client name or series name)
  - featured: boolean, set true only for the very first project
  
  Data source follows:
  ${dataStr.substring(0, 40000)}
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            title: { type: Type.STRING },
            cat: { type: Type.STRING },
            img: { type: Type.STRING },
            desc: { type: Type.STRING },
            link: { type: Type.STRING },
            tools: { type: Type.ARRAY, items: { type: Type.STRING } },
            sub: { type: Type.STRING },
            featured: { type: Type.BOOLEAN },
          },
          required: ["id", "title", "cat", "img", "desc", "link", "tools", "sub"],
        }
      }
    }
  });

  try {
    const text = response.text || "[]";
    return JSON.parse(text);
  } catch (e) {
    console.error("Failed to parse Gemini response for Behance projects:", e);
    return [];
  }
}

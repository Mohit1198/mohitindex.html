import { GoogleGenAI } from "@google/genai";
import { Project } from "../constants.ts";

let genAI: GoogleGenAI | null = null;

function getGenAI() {
  if (!genAI) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY environment variable is not set correctly. Please configure it in the Secrets panel.");
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
}

export async function extractProjectsFromBehance(data: string | any): Promise<Project[]> {
  const dataStr = typeof data === 'string' ? data : JSON.stringify(data);
  
  const ai = getGenAI();
  
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

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              title: { type: "string" },
              cat: { type: "string" },
              img: { type: "string" },
              desc: { type: "string" },
              link: { type: "string" },
              tools: { type: "array", items: { type: "string" } },
              sub: { type: "string" },
              featured: { type: "boolean" },
            },
            required: ["id", "title", "cat", "img", "desc", "link", "tools", "sub"],
          }
        }
      }
    });

    const text = response.text || "[]";
    return JSON.parse(text);
  } catch (e) {
    console.error("Failed to extract or parse Gemini response for Behance projects:", e);
    return [];
  }
}

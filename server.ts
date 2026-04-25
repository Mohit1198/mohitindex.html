import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { extractProjectsFromBehance } from "./src/services/geminiService";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.get("/api/behance-projects", async (req, res) => {
    try {
      const response = await fetch("https://www.behance.net/montykothari");
      const html = await response.text();
      
      let extractionData: any = html.substring(0, 50000); // Default to HTML snippet

      const stateMatch = html.match(/window\.__INITIAL_STATE__\s*=\s*({.*?});/s);
      if (stateMatch) {
        try {
          extractionData = JSON.parse(stateMatch[1]);
        } catch (e) {
          console.error("JSON parse failed for Behance state", e);
        }
      }
      
      // Use AI to extract and structure the projects
      const projects = await extractProjectsFromBehance(extractionData);
      res.json(projects);
    } catch (error) {
      console.error("Error fetching Behance:", error);
      res.status(500).json({ error: "Error fetching Behance data" });
    }
  });

  // API routes before Vite middleware
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

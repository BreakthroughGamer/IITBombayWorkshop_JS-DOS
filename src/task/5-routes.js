import { namespaceWrapper, app } from "@_koii/namespace-wrapper";
import path from "path";
import fs from "fs/promises";
import express from "express";
export function routes() {
  /**
   *
   * Define all your custom routes here
   *
   */

  
  // Define the directory and file paths
  // const folderPath = path.join(__dirname,  "dave_gamedir");
  const folderPath = path.join(__dirname);
  app.use(express.static(path.join(folderPath, "game")));
  const mainHtmlFilePath = path.join(folderPath,'game', "main.html");
  console.log(mainHtmlFilePath)
  
  // Serve the HTML file at the `/game` endpoint
  app.get("/game", async (req, res) => {
    try {
      // Check if the file exists
      await fs.access(mainHtmlFilePath);
      const text = await fs.readFile(mainHtmlFilePath, "utf-8");
      // Send the HTML file
      res.send(text);

    } catch (error) {
      console.error("Error serving main.html:", error);
      res.status(404).send("Game HTML file not found");
    }
  });
}

import { namespaceWrapper } from "@_koii/namespace-wrapper";
import express from "express";
import path from "path";

export async function task(roundNumber) {
  // Run your task and store the proofs to be submitted for auditing
  // The submission of the proofs is done in the submission function
  try {
    console.log(`EXECUTE TASK FOR ROUND ${roundNumber}`);

    // const app = express();
    // const PORT = 3000;

    // // Serve static files
    // app.use(express.static(path.resolve(".")));

    // Default route
    // app.get("/", (req, res) => {
    //   res.sendFile(path.resolve("index.html"));
    // });

    // // Start the server
    // app.listen(PORT, () => {
    //   console.log(`Server is running at http://localhost:${PORT}`);
    // });

  } catch (error) {
    console.error("EXECUTE TASK ERROR:", error);
  }
}

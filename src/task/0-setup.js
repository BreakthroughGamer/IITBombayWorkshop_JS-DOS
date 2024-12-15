import { namespaceWrapper } from "@_koii/namespace-wrapper";
import { KoiiStorageClient } from "@_koii/storage-task-sdk";
import fs from "fs";
import { promises as fsPromises } from 'fs';
import path from "path";
import open from "open";

export async function setup() {
  console.log("CUSTOM SETUP");

  // const client = new KoiiStorageClient();

  // // Get file from IPFS
  // async function getFileData(cid, fileName) {
  //   try {
  //     const blob = await client.getFile(cid, fileName);
  //     const text = await blob.text(); // Convert Blob to text
  //     return text;
  //   } catch (error) {
  //     console.error(`Error retrieving file ${fileName} with CID ${cid}:`, error);
  //     throw error;
  //   }
  // }

  // // Check if the file exists before writing it
  // const checkAndWriteFile = async (filePath, fileData, fileName) => {
  //   try {
  //     // Check if the file already exists
  //     console.log(`Checking if ${filePath} exists...`);
  //     await fsPromises.access(filePath);
  //     console.log(`${fileName} already exists, skipping download.`);
  //   } catch (err) {
  //     // If the file doesn't exist, write it
  //     await fsPromises.writeFile(filePath, fileData);
  //     console.log(`File written successfully to: ${filePath}`);
  //   }
  // };

  // // main.html CID:         bafybeid3s2sqyvhicyfzazbi6qjiarmwozakuvpfg2ijbl6wwwekjpuwqe
  // // bundle.jsdos CID:      bafybeifd764lnuj56dfw3ebkyv3reehzshzox5wpb7szyr7vpqwcwuaj2m
  // // js-dos.js CID:         bafybeiatydrn6mnqqf425nhnieqif2lamcqzjwlwtbndhta7e4l7vmw6pa
  // // js-dos.css CID:        bafybeie36usyziyly3qlhkvcikmwozcz3e2btomu7pm63fw4ryf3cbn26e

  // // Define file names and their corresponding CID values
  // const mainHtmlCID = "bafybeihmghtsjgijkbhpndgx2ymtgerr2ixwkht46bnjqdeuqxbqeade6m";
  // const mainHtmlFileName = "main.html";

  // const bundleJSDosCID = "bafybeifd764lnuj56dfw3ebkyv3reehzshzox5wpb7szyr7vpqwcwuaj2m"; 
  // const bundleJSDosFileName = "bundle.jsdos";

  // const jsDosCID = "bafybeiatydrn6mnqqf425nhnieqif2lamcqzjwlwtbndhta7e4l7vmw6pa"; 
  // const jsDosFileName = "js-dos.js";

  // const jsDosCSSCID = "bafybeie36usyziyly3qlhkvcikmwozcz3e2btomu7pm63fw4ryf3cbn26e"; 
  // const jsDosCSSFileName = "js-dos.css";

  // // Define the folder and file paths
  // const folderPath = path.join(__dirname, "dave_gamedir");

  // // Ensure the folder exists
  // if (!fs.existsSync(folderPath)) {
  //   fs.mkdirSync(folderPath, { recursive: true }); // Create the folder if it doesn't exist
  // } else {
  //   console.log("Folder already exists:", folderPath);
  // }

  try {
  //   // Fetch and write `main.html`
  //   const mainHtmlData = await getFileData(mainHtmlCID, mainHtmlFileName);
  //   if (mainHtmlData) {
  //     const mainHtmlFilePath = path.join(__dirname, mainHtmlFileName); // Adjust path as needed
  //     await checkAndWriteFile(mainHtmlFilePath, mainHtmlData, mainHtmlFileName);
  //   } else {
  //     console.error(`Failed to fetch or write ${mainHtmlFileName}`);
  //   }

  //   // Fetch and write `bundle.jsdos`
  //   const bundleJSDosData = await getFileData(bundleJSDosCID, bundleJSDosFileName);
  //   if (bundleJSDosData) {
  //     const bundleJSDosFilePath = path.join(__dirname, bundleJSDosFileName); // Adjust path as needed
  //     await checkAndWriteFile(bundleJSDosFilePath, bundleJSDosData, bundleJSDosFileName);
  //   } else {
  //     console.error(`Failed to fetch or write ${bundleJSDosFileName}`);
  //   }

  //   // Fetch and write `js-dos.js`
  //   const jsDosData = await getFileData(jsDosCID, jsDosFileName);
  //   if (jsDosData) {
  //     const jsDosFilePath = path.join(__dirname, jsDosFileName); // Adjust path as needed
  //     await checkAndWriteFile(jsDosFilePath, jsDosData, jsDosFileName);
  //   } else {
  //     console.error(`Failed to fetch or write ${jsDosFileName}`);
  //   }

  //   // Fetch and write `js-dos.css`
  //   const jsDosCSSData = await getFileData(jsDosCSSCID, jsDosCSSFileName);
  //   if (jsDosCSSData) {
  //     const jsDosCSSFilePath = path.join(__dirname, jsDosCSSFileName); // Adjust path as needed
  //     await checkAndWriteFile(jsDosCSSFilePath, jsDosCSSData, jsDosCSSFileName);
  //   } else {
  //     console.error(`Failed to fetch or write ${jsDosCSSFileName}`);
  //   }

    // Get Task ID
    const taskIdString = process.env.TASK_ID;  // Example "'BXbYKFdXZhQgEaMFbeShaisQBYG1FD4MiSf9gg4n6mVn' # Easy Testing Task ID"

    // Use a regular expression to extract the content between single quotes
    const match = taskIdString.match(/'([^']+)'/);  // This regex matches the content between single quotes

    let taskid;
    if (match) {
      taskid = match[1];  // Extracted Task ID (content inside the quotes)
      console.log("App found task ID of:", taskid);  // Logs the Task ID without the quotes
      // Automatically open the desired URL in the default browser
      open(`http://localhost:30017/task/${taskid}/game`);
    } else {
      console.log("No Task ID found in the provided string.");
    }


  } catch (error) {
    console.error("Setup failed:", error);
  }
}

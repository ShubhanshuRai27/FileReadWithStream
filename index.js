//Require Necessary Modules
const fs = require("fs");

// Take filename from command line arguments
const fileName = process.argv[2];


// If no filename provided
if (!fileName) {
  console.error("❌ Please provide a file name: node index.js <filename>");
  process.exit(1);
}

// Check if file exists
if (!fs.existsSync(fileName)) {
  console.error(`❌ File "${fileName}" does not exist.`);
  process.exit(1);
}

//Create Read Stream
const readStream = fs.createReadStream("data.txt", "utf8");  // (path,encoding type)


let lineCount = 0;
let bytesRead = 0;

//Listen for data chunks

//  On : used to register a listener function that will be called repeatedly whenever new data is available on a ReadStream
//  Once : only trigger the listener function a single time when the first data chunk is received from the stream

readStream.on("data", (chunk) => {    //data here is data present inside the file and not the filename
  bytesRead += chunk.length;
  console.log(`📖 Read ${bytesRead} bytes...`);

  // Count lines
  lineCount += chunk.split("\n").length;

  });

// Error handling
 readStream.on("error", (err) => {
    console.error("Error Reading File :", err);
  });

// File Reading Done and Dusted
readStream.on("end", () => {
  console.log(`✅ Finished reading file! Total lines: ${lineCount}`);
});
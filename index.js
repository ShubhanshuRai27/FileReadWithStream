//Require Necessary Modules
const fs = require("fs");

//Create Read Stream
const readStream = fs.createReadStream("data.txt", "utf8");  // (path,encoding type)

//Listen for data chunks

//  On : used to register a listener function that will be called repeatedly whenever new data is available on a ReadStream
//  Once : only trigger the listener function a single time when the first data chunk is received from the stream

readStream.on("data", (chunk) => {                          //data here is data present inside the file and not the filename
    console.log("Received Data Chunk:", chunk);

    // If you want , here is where you process the chuck recieved and write to new file
  });

// Error handling
 readStream.on("error", (err) => {
    console.error("Error Reading File :", err);
  });

// File Reading Done and Dusted
  readStream.on("end", () => {
    console.log("Finished Reading File!!");
  });
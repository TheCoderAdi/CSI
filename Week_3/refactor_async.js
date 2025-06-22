const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");
const outputPath = path.join(__dirname, "output.txt");


// Original Version: Using Callbacks
function processFileWithCallbacks() {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.error("Read error:", err);
        }

        const upperText = data.toUpperCase();

        fs.writeFile(outputPath, upperText, (err) => {
            if (err) {
                return console.error("Write error:", err);
            }
            console.log("Callback Version: File written successfully.");
        });
    });
}


// Refactored Version: Using Async/Await
async function processFileWithAsyncAwait() {
    try {
        const data = await fsPromises.readFile(filePath, "utf8");
        const upperText = data.toUpperCase();
        await fsPromises.writeFile(outputPath, upperText);
        console.log("Async/Await Version: File written successfully.");
    } catch (error) {
        console.error("Error:", error.message);
    }
}


// Run one version at a time
// Uncomment one of the following lines to test

// processFileWithCallbacks();
processFileWithAsyncAwait();
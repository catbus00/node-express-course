const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    try {
        await writeFile("temp.txt", "First Line\nSecond Line\nThird Line");
        console.log("File 'temp.txt' has been written.");
      } catch (error) {
        console.error("Error:", error);
      }
    }

const reader = async () => {
    try {
        const data = await readFile("temp.txt", "utf8");
        console.log("File info:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

async function readWrite() {
  await writer();
  await reader();
}

readWrite()
const fs = require("fs").promises; 

const myFunction = () => {
    fs.appendFile("temp.txt", "First Line\n")
    .then(() => {
        return fs.appendFile("temp.txt", "Second Line\n") 
    })
    .then(() => {
        return fs.appendFile("temp.txt", "Third Line\n")
    })
    .then(() => {
        return fs.readFile("temp.txt", "utf-8");
    })
    .then((data) => {
        console.log(data); 
    })
    .catch((error) => {
        console.log("An error occurred: ", error);
    });
};

myFunction();

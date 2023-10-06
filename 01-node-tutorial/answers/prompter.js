const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let randomNumber = Math.floor(Math.random() * 100) + 1;
let item = "Guess a number from 1 to 100.";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.

const form = () => {
  return `
  <body>
  <p>${item}</p>
  <form method="POST">
  <input type="number" name="guess" min="1" max="100">
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["guess"]) {
        const userGuess = parseInt(body["guess"]);
        if (isNaN(userGuess)) {
          item = "Please enter a valid number.";
        } else if (userGuess === randomNumber) {
          item = "Congratulations! You guessed the correct number.";
          randomNumber = Math.floor(Math.random() * 100) + 1;
        } else if (userGuess < randomNumber) {
          item = "Try a higher number.";
        } else {
          item = "Try a lower number.";
        }
      } else {
        item = "Please enter a number.";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");

// instance of express framework
const expInstance = require("express");

// create server
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = expInstance();
app.use(expInstance.static("public"));
app.get("/", (request, response, next) =>
  response.send(` <h1 style=" color: darkgreen;
"> Welcome </h1>`)
);
// home page:
app.get("/homepage", (request, response, next) => {
  //   console.log(request);
  response.sendFile(__dirname + "/views/Home.html");
});
// About page:
app.get("/about", (request, response, next) => {
  //   console.log(request);
  response.sendFile(__dirname + "/views/About.html");
});
// Works page:
app.get("/works", (request, response, next) => {
  //   console.log(request);
  response.sendFile(__dirname + "/views/Works.html");
});
// Photo Gallery page:
app.get("/photogallery", (request, response, next) => {
  //   console.log(request);
  response.sendFile(__dirname + "/views/PhotoGallery.html");
});

// server listerning
app.listen(PORT, () => {
  console.log(`Server is Running ..... ${PORT}`);
});

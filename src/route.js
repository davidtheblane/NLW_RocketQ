// importando
const express = require("express");
const QuestionController = require("./controllers/QuestionController");
const RoomController = require("./controllers/RoomController");

// variavel route contem todas as routes do express
const route = express.Router();

// passando a rota das paginas
route.get("/", (req, res) => res.render("index", { page: "enter-room" }));
route.get("/create-pass", (req, res) =>
  res.render("index", { page: "create-pass" })
);

route.post("/create-room", RoomController.create);
route.get("/room/:room", RoomController.open);
route.post("/enterroom", RoomController.enter);

route.post("/question/create/:room", QuestionController.create);
route.post("/question/:room/:question/:action", QuestionController.index);

// exportando a constante route para que o server.js possa enxergá-la
module.exports = route;

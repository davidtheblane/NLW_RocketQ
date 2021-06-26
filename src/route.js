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

route.get("/room/:room", (req, res) => res.render("room"));

// formato que o formulario de dentro da modal tem que passar a informação
route.post("/room/:room/:question/:action", QuestionController.index);
route.post("/room/create-room", RoomController.create);

// exportando a constante route para que o server.js possa enxergá-la
module.exports = route;

// importando
const express = require("express");
const QuestionController = require("./controllers/QuestionController");

// variavel route contem todas as routes do express
const route = express.Router();

// passando a rota das paginas
route.get("/", (req, res) => res.render("index"));
route.get("/room", (req, res) => res.render("room"));
route.get("/create-pass", (req, res) => res.render("create-pass"));

// formato que o formulario de dentro da modal tem que passar a informação
route.post("/room/:room/:question/:action", QuestionController.index);

// exportando a constante route para que o server.js possa enxergá-la
module.exports = route;

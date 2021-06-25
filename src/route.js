// importando
const express = require("express");

// variavel route contem todas as routes do express
const route = express.Router();

// passando a rota das paginas
route.get("/", (req, res) => res.render("index"));
route.get("/room", (req, res) => res.render("room"));
route.get("/create-pass", (req, res) => res.render("create-pass"));

// exportando a constante route para que o server.js possa enxergá-la
module.exports = route;

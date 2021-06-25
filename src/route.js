// importando
const express = require("express");

// variavel route contem todas as routes do express
const route = express.Router();

// passando a rota da pagina inicial
route.get("/", (req, res) => res.render("index"));

// exportando a constante route para que o server.js possa enxergá-la
module.exports = route;

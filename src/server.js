// importando
const express = require("express");
const route = require("./route");
const path = require("path");

// declarando que server representa o express
const server = express();

// responsavel por setar o modulo ejs como view engine
//Traduzindo, os elementos abaixo representam: .../nlw_rocketq/src/views
server.set("view engine", "ejs");

// passando o nome da pasta onde o conteudo sera guardado
server.use(express.static("public"));

//responsavel por mostrar o caminho da pasta views
server.set("views", path.join(__dirname, "views"));

// declarando que o server deve usar o route
server.use(route);

// declarando a porta em que o server ira rodar
server.listen(3000, () => console.log("Rodando!!!"));

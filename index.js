const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/mono.routes");
const cors = require('cors')
const server = express();
 
server.use(express.json());
server.use(cors());

server.listen(5500, () => {
    console.log("Serveur lancé et l'écoute du port 5500");

    mongoose.connect("mongodb://127.0.0.1:27017/project");

    const db = mongoose.connection;

    db.once("open", () => console.log("Connexion à la db réussi")).on("error", error => console.error("problème de connexion à la base de données", error));
});

server.get("/", (req, res) => {
    console.log("coucou");
    res.send("Bienvenue sur l'API monoMusic"); 
});

routes(server);
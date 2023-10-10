const express = require("express");
const app = express();
const monoController = require("../controllers/mono.controller");

app.get("/apimono/getAll", (req, res) => {
    monoController.getAll(req, res);
});
app.get("/apimono/get/:id", (req, res) => {
    monoController.get(req, res);
});
app.post("/apimono/create", (req, res) => {
    monoController.create(req, res);
});
app.delete("/apimono/delete/:id", (req, res) => {
    monoController.delete(req, res);
});
app.get("*", (req, res) => {
    res.status(404).send("Rien à faire ici ! ");
});
app.put("/apimono/edit/:id", (req, res) => {
    monoController.edit(req, res);
});

module.exports = app;

const monoController = require("../controllers/mono.controller");

module.exports = server => {
    server.get("/monos", (req, res) => {
        monoController.getAll(req, res);
    });
    server.get("/monos/:id", (req, res) => {
        monoController.get(req, res);
    });
    server.post("/monos", (req, res) =>
    monoController.create(req, res));
    server.delete("/monos/:id", (req, res) => {
        monoController.delete(req, res);
    });
    server.get("*", (req, res) => {
        res.status(404).send("Rien à faire ici ! ");
    });
    server.put("/monos", (req, res) => {
        monoController.edit(req, res);
    });
}
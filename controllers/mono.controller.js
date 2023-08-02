const monoModel = require("../models/mono.model");

module.exports = {
    getAll(req, res) {
        monoModel.find().then(music => {
            res.send(music);
        }).catch(err =>
            res.status(500).send({ error: err.message })
        )
    },

    get(req, res) {
        const id = req.params.id;
        monoModel.findById(id).then(music => {
            if (music) {
                res.send(music);
            } else {
                res.status(404).send({ error: "Ecouteurs non trouvé" });
            }
        }).catch(err =>
            res.status(500).send({ error: err.message }));
    },

    create(req, res) {
        console.log(req.body);
        const music = new monoModel({
            id: req.body.id,
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            sell: req.body.sell,
            options: {
                batterylife: req.body.options.batterylife,
                bassBoost: req.body.options.bassBoost,
                db: req.body.options.db,
                bluetooth: req.body.options.bluetooth,
            },
        });
        music.save().then(() => res.send({ error: "Ecouteurs non trouvé" })).catch(err => {
            res.status(400).send({ error: err.message });
        })
    },
    edit(req, res) {
        const id = req.body._id;
        monoModel.findByIdAndUpdate(id, {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            sell: req.body.sell,
            options: {
                batterylife: req.body.options.batterylife,
                bassBoost: req.body.options.bassBoost,
                db: req.body.options.db,
                bluetooth: req.body.options.bluetooth,
            },
        }).then(music => {
            if (music) {
                res.send(`Modification des Ecouteurs ${music.name}`)
            }
            else {
                res.status(404).send({ error: "Ecouteurs non trouvée" })
            }
        }).catch(err => {
            res.status(500).send({ error: err.message });
        })
    },
    delete(req, res) {
        const id = req.params.id;
        monoModel.findByIdAndDelete(id).then(music => {
            if (music) {
                res.send(`suppression des Ecouteurs ${music.name}`)
            }
            else {
                res.status(404).send({ error: "Ecouteurs non trouvée" });
            }
        }).catch(err => {
            res.status(500).send({ error: err.message })
        });
    }
}

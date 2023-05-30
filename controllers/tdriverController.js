const Tdriver = require("../models/tdriver");

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const tdriver = {
        title: req.body.title
    }

    tdriver.create(tdriver)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.params.id || !req.body.title) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const tdriver = {
        id: req.params.id,
        title: req.body.title
    }

    Tdriver.update(tdriver, {where:{id: tdriver.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    tdriver.findAll()
    .then(data => {
        res.send(data);
    })
}

exports.findById = (req, res) => {
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const id = req.params.id;
    
    Tdriver.findOne({where: {id: id}})
    .then(data => {
        res.send(data);
    })
}
    
exports.delete = (req, res) => {
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const id = req.params.id;
    
    Tdriver.destroy({where: {id: id}})
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    Tdriver.count()
    .then(data => {
        res.send(data)
    })
}

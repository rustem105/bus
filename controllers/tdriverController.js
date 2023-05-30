const Tdriver = require("../models/tdriver");

exports.create = (req, res) => {
    if (!req.body.BusID || !req.body.Phone || !req.body.DriverYears) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const tdriver = {
        BusID: req.body.BusID,
        Phone: req.body.Phone,
        DriverYears: req.body.DriverYears
    }

    Tdriver.create(tdriver)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.params.id || !req.body.BusID || !req.body.Phone || !req.body.DriverYears) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const tdriver = {
        BusID: req.body.BusID,
        Phone: req.body.Phone,
        DriverYears: req.body.DriverYears
    }

    Tdriver.update(tdriver, {where:{DriverNameID: req.params.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Tdriver.findAll()
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
    
    Tdriver.findOne({where: {DriverNameID: id}})
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
    
    Tdriver.destroy({where: {DriverNameID: id}})
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

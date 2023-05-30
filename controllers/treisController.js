const Treis = require("../models/treis");

exports.create = (req, res) => {
    if (!req.body.Route || !req.body.Time || !req.body.DriverID || !req.body.Bus || !req.body.dDate) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const treis = {
        Route: req.body.route,
        Time: req.body.Time,
        DriverID: req.body.DriverID,
        Bus: req.body.Bus,
        dDate: req.body.dDate
    }

    Treis.create(treis)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.params.id || !req.body.Time || !req.body.DriverID || !req.body.Bus || !req.body.dDate) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const treis = {
        Route: req.body.route,
        Time: req.body.Time,
        DriverID: req.body.DriverID,
        Bus: req.body.Bus,
        dDate: req.body.dDate
    }

    Treis.update(treis, {where:{ReisID: treis.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Treis.findAll()
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
    
    Treis.findOne({where: {ReisID: id}})
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
    
    Treis.destroy({where: {ReisID: id}})
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    Treis.count()
    .then(data => {
        res.send(data)
    })
}

exports.searchByVehicleNumber = (req, res) => {
    if (!req.params.vehicleNumber) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    Treis.findAll({where:{Bus:req.params.vehicleNumber}}).then(data=>{
        res.send(data);
    });

}
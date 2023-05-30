const Tbus = require("../models/tbus");


exports.create = (req, res) => {
    if (!req.body.Firm || !req.body.VehicleNumber || !req.body.PassengerSeats) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

     Tbus.create(req.body)
     .then(data => {
         res.send(data)
    })
    
}

exports.update = (req, res) => {
    if (!req.body.Firm || !req.body.VehicleNumber || !req.body.PassengerSeats) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const tbus = {
        Firm: req.body.Firm,
        VehicleNumber: req.body.VehicleNumber,
        PassengerSeats: req.body.PassengerSeats
    }

    Tbus.update(tbus, {where:{BusID: req.params.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Tbus.findAll()
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
    
    Tbus.findOne({where: {BusID: id}})
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
    
    Tbus.destroy({where: {BusID: id}})
    .then(data => {
        res.send('UDALENO')
    })
}

exports.count = (req, res) => {
    Tbus.count()
    .then(data => {
        res.send(data)
    })
}


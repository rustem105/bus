const Tbustime = require("../models/tbustime");

exports.create = (req, res) => {
    if (!req.body.Stop || !req.body.Stoptime || !req.body.ReisID ) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const tbustime = {
        Stop: req.body.Stop,
        StopTime: req.body.Stoptime,
        ReisID: req.body.ReisID 
    }

    Tbustime.create(tbustime)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.body.TimeID || !req.body.Stop || !req.body.Stoptime || !req.body.ReisID ) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const tbustime = {
        Stop: req.body.Stop,
        StopTime: req.body.Stoptime,
        ReisID: req.body.ReisID 
    }

    Tbustime.update(tbustime, {where:{TimeID: tbustime.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Tbustime.findAll()
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
    
    Tbustime.findOne({where: {TimeID: id}})
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
    
    Tbustime.destroy({where: {TimeID: id}})
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    Tbustime.count()
    .then(data => {
        res.send(data)
    })
}

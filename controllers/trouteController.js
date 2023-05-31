const TRoute = require("../models/troute");

exports.create = (req, res) => {
    if (!req.body.tTo ||!req.body.fFrom) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const troute = {
        tTo: req.body.tTo, 
        fFrom: req.body.fFrom
    }

    TRoute.create(troute)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.params.id || req.body.tTo ||!req.body.fFrom) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const troute = {
        tTo: req.body.tTo, 
        fFrom: req.body.fFrom
    }

    TRoute.update(troute, {where:{RouteID: troute.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    TRoute.findAll()
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
    
    TRoute.findOne({where: {RouteID: id}})
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
    
    TRoute.destroy({where: {RouteID: id}})
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    TRoute.count()
    .then(data => {
        res.send(data)
    })
}

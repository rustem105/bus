const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const tBustimeController = require("../Controllers/tbustimeController");
    const router = require("express").Router();

    router.post("/tBustime/", [authJwt.verifyToken, authJwt.isAdmin], tBustimeController.create);

    router.put("/tBustime/:id", [authJwt.verifyToken, authJwt.isAdmin], tBustimeController.update);

    router.get("/tBustime/", tBustimeController.findAll);
    router.get("/tBustime/:id", tBustimeController.findById);

    router.delete("/tBustime/:id", [authJwt.verifyToken, authJwt.isAdmin], tBustimeController.delete);
    
    app.use("/", router);
}
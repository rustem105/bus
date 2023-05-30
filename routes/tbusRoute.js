const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const tBusController = require("../controllers/tbusController");
    const router = require("express").Router();

    router.post("/tBus/", [authJwt.verifyToken, authJwt.isAdmin], tBusController.create);

    router.put("/tBus/:id", [authJwt.verifyToken, authJwt.isAdmin], tBusController.update);

    router.get("/tBus/", tBusController.findAll);
    router.get("/tBus/:id", tBusController.findById);

    router.delete("/tBus/:id", [authJwt.verifyToken, authJwt.isAdmin], tBusController.delete);
    
    app.use("/", router);
}
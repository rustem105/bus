const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const tDriverController = require("../controllers/tdriverController");
    const router = require("express").Router();

    router.post("/tDriver/", [authJwt.verifyToken, authJwt.isAdmin], tDriverController.create);

    router.put("/tDriver/:id", [authJwt.verifyToken, authJwt.isAdmin], tDriverController.update);

    router.get("/tDriver/", tDriverController.findAll);
    router.get("/tDriver/:id", tDriverController.findById);

    router.delete("/tDriver/:id", [authJwt.verifyToken, authJwt.isAdmin], tDriverController.delete);
    
    app.use("/", router);
}
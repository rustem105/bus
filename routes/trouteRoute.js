const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const tRouteController = require("../controllers/trouteController");
    const router = require("express").Router();

    router.post("/tRoute/", [authJwt.verifyToken, authJwt.isAdmin], tRouteController.create);

    router.put("/tRoute/:id", [authJwt.verifyToken, authJwt.isAdmin], tRouteController.update);

    router.get("/tRoute/", tRouteController.findAll);
    router.get("/tRoute/:id", tRouteController.findById);

    router.delete("/tRoute/:id", [authJwt.verifyToken, authJwt.isAdmin], tRouteController.delete);
    
    app.use("/", router);
}
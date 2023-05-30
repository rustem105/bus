const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const tReisController = require("../controllers/treisController");
    const router = require("express").Router();

    router.post("/tReis/", [authJwt.verifyToken, authJwt.isAdmin], tReisController.create);

    router.put("/tReis/:id", [authJwt.verifyToken, authJwt.isAdmin], tReisController.update);

    router.get("/tReis/", tReisController.findAll);
    router.get("/tReis/:id", tReisController.findById);

    router.delete("/tReis/:id", [authJwt.verifyToken, authJwt.isAdmin], tReisController.delete);
    
    app.use("/", router);
}
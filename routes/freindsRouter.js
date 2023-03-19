
const express = require("express");
const freindsRouter = express.Router();
const freindsController = require("../controllers/freindsController");
const verifyJWT = require("../middleware/verifyJWT")

freindsRouter.route("/")
    .get(verifyJWT, freindsController.getAllFreinds)
    .post(verifyJWT, freindsController.addFreind)

freindsRouter.route("/:freindId")
    .get(verifyJWT, freindsController.getFreindById)
    .delete(verifyJWT,freindsController.deleteFreindById)
    .put(verifyJWT,freindsController.updateFreind);

module.exports = freindsRouter;

const express = require("express");
const GeneralCtrl = require("../controllers/generalController");

const router = express.Router();

router.get("/general", GeneralCtrl.getAllGeneralData);
router.put("/general/:id", GeneralCtrl.updateGeneral);
router.post("/general", GeneralCtrl.createGeneral)
router.get("/general/:id", GeneralCtrl.getGeneralById);

module.exports = router;
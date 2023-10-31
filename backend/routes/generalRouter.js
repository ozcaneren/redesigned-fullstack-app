const express = require("express");
const GeneralCtrl = require("../controllers/generalController");

const router = express.Router();

router.get("/general", GeneralCtrl.getGeneral);
router.put("/general", GeneralCtrl.updateGeneral);
router.post("/general", GeneralCtrl.createGeneral)

module.exports = router;
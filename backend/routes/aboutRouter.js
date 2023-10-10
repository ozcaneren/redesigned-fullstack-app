const express = require("express");
const AboutCtrl = require("../controllers/aboutController");

const router = express.Router();

router.post("/about", AboutCtrl.createAbout);
router.put("/about/:id", AboutCtrl.updateAbout);
router.delete("/about/:id", AboutCtrl.deleteAbout);
router.get("/about/:id", AboutCtrl.getAboutById);
router.get("/abouts", AboutCtrl.getAbouts);

module.exports = router;
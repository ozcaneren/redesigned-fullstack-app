const express = require("express");
const HeaderCtrl = require("../controllers/headerController");

const router = express.Router();

router.get("/header/texts", HeaderCtrl.getHeaderTexts);
router.get("/header/text/:id", HeaderCtrl.getHeaderTextById);
router.post("/header/texts", HeaderCtrl.createHeaderText);
router.put("/header/text/:id", HeaderCtrl.updateHeaderText);
router.delete("/header/text/:id", HeaderCtrl.deleteHeaderText);

router.get("/header/links", HeaderCtrl.getHeaderLinks);
router.get("/header/link/:id", HeaderCtrl.getHeaderLinkById);
router.post("/header/links", HeaderCtrl.createHeaderLink);
router.put("/header/link/:id", HeaderCtrl.updateHeaderLink);
router.delete("/header/link/:id", HeaderCtrl.deleteHeaderLink);

module.exports = router;
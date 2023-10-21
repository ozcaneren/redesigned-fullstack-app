const express = require("express");
const FooterCtrl = require("../controllers/footerController");

const router = express.Router();

router.get("/footer/icons", FooterCtrl.getFooterIcons);
router.post("/footer/icons", FooterCtrl.createFooterIcon);
router.put("/footer/icon/:id", FooterCtrl.updateFooterIcon);
router.delete("/footer/icon/:id", FooterCtrl.deleteFooterIcon);

router.get("/footer/texts", FooterCtrl.getFooterTexts);
router.post("/footer/texts", FooterCtrl.createFooterText);
router.put("/footer/text/:id", FooterCtrl.updateFooterText);
router.delete("/footer/text/:id", FooterCtrl.deleteFooterText);

router.get("/footer/links", FooterCtrl.getFooterLinks);
router.post("/footer/links", FooterCtrl.createFooterLink);
router.put("/footer/link/:id", FooterCtrl.updateFooterLink);
router.delete("/footer/link/:id", FooterCtrl.deleteFooterLink);

module.exports = router;
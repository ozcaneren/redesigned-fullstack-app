const express = require("express");
const FooterCtrl = require("../controllers/footerController");

const router = express.Router();

router.post("/footer", FooterCtrl.createFooter);
router.put("/footer/:id", FooterCtrl.updateFooter);
router.delete("/footer/:id", FooterCtrl.deleteFooter);
router.get("/footer/:id", FooterCtrl.getFooterById);
router.get("/footers", FooterCtrl.getFooters);

module.exports = router;
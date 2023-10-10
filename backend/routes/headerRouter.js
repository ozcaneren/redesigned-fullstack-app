const express = require("express");
const HeaderCtrl = require("../controllers/headerController");

const router = express.Router();

router.post("/header", HeaderCtrl.createHeader);
router.put("/header/:id", HeaderCtrl.updateHeader);
router.delete("/header/:id", HeaderCtrl.deleteHeader);
router.get("/header/:id", HeaderCtrl.getHeaderById);
router.get("/headers", HeaderCtrl.getHeaders);

module.exports = router;
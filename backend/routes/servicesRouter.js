const express = require("express");
const ServicesCtrl = require("../controllers/servicesController");

const router = express.Router();

router.post("/services", ServicesCtrl.createServices);
router.put("/services/:id", ServicesCtrl.updateServices);
router.delete("/services/:id", ServicesCtrl.deleteServices);
router.get("/services/:id", ServicesCtrl.getServicesById);
router.get("/services", ServicesCtrl.getServices);

module.exports = router;
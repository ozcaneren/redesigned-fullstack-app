const express = require("express");
const ServicesCtrl = require("../controllers/servicesController");

const router = express.Router();

router.post("/service", ServicesCtrl.createServices);
router.put("/service/:id", ServicesCtrl.updateServices);
router.delete("/service/:id", ServicesCtrl.deleteServices);
router.get("/service/:id", ServicesCtrl.getServicesById);
router.get("/services", ServicesCtrl.getServices);

module.exports = router;
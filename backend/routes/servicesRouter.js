const express = require("express");
const ServicesCtrl = require("../controllers/servicesController");

const router = express.Router();

router.get("/service/cards", ServicesCtrl.getServiceCards);
router.get("/service/cards/:id", ServicesCtrl.getServiceCardById);
router.post("/service/cards", ServicesCtrl.createServiceCard);
router.put("/service/cards/:id", ServicesCtrl.updateServiceCard);
router.delete("/service/cards/:id", ServicesCtrl.deleteServiceCard);

router.get("/service/titles", ServicesCtrl.getServiceTitles);
router.get("/service/titles/:id", ServicesCtrl.getServiceTitleById);
router.post("/service/titles", ServicesCtrl.createServiceTitle);
router.put("/service/titles/:id", ServicesCtrl.updateServiceTitle);
router.delete("/service/titles/:id", ServicesCtrl.deleteServiceTitle);

module.exports = router;
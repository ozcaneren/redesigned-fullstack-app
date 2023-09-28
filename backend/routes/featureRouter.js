const express = require("express");
const extraFeatureCtrl = require("../controllers/featureController");

const router = express.Router();

router.post("/extrafeature", extraFeatureCtrl.createExtraFeature);
router.put("/extrafeature/:id", extraFeatureCtrl.updateExtraFeature);
router.delete("/extrafeature/:id", extraFeatureCtrl.deleteExtraFeature);
router.get("/extrafeature/:id", extraFeatureCtrl.getExtraFeatureById);
router.get("/extrafeatures", extraFeatureCtrl.getExtraFeatures);

module.exports = router;
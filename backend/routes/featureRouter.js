const express = require("express");
const TurkishExtraFeatureCtrl = require("../controllers/turkishFeatureController");
const EnglishExtraFeatureCtrl = require("../controllers/englishFeatureController");

const router = express.Router();

router.post("/extrafeature/turkish", TurkishExtraFeatureCtrl.createTurkishExtraFeature);
router.put("/extrafeature/turkish/:id", TurkishExtraFeatureCtrl.updateTurkishExtraFeature);
router.delete("/extrafeature/turkish/:id", TurkishExtraFeatureCtrl.deleteTurkishExtraFeature);
router.get("/extrafeature/turkish/:id", TurkishExtraFeatureCtrl.getTurkishExtraFeatureById);
router.get("/extrafeatures/turkish", TurkishExtraFeatureCtrl.getTurkishExtraFeatures);

router.post("/extrafeature/english", EnglishExtraFeatureCtrl.createEnglishExtraFeature);
router.put("/extrafeature/english/:id", EnglishExtraFeatureCtrl.updateEnglishExtraFeature);
router.delete("/extrafeature/english/:id", EnglishExtraFeatureCtrl.deleteEnglishExtraFeature);
router.get("/extrafeature/english/:id", EnglishExtraFeatureCtrl.getEnglishExtraFeatureById);
router.get("/extrafeatures/english", EnglishExtraFeatureCtrl.getEnglishExtraFeatures);

module.exports = router;
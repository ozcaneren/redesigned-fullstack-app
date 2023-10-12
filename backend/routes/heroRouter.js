const express = require("express");
const HeroCtrl = require("../controllers/heroController");

const router = express.Router();

router.post("/hero", HeroCtrl.createHero);
router.put("/hero/:id", HeroCtrl.updateHero);
router.delete("/hero/:id", HeroCtrl.deleteHero);
router.get("/hero/:id", HeroCtrl.getHeroById);
router.get("/heroes", HeroCtrl.getHeroes);

module.exports = router;
const express = require("express");
const TeamsCtrl = require("../controllers/teamsController");

const router = express.Router();

router.post("/team", TeamsCtrl.createTeams);
router.put("/team/:id", TeamsCtrl.updateTeams);
router.delete("/team/:id", TeamsCtrl.deleteTeams);
router.get("/team/:id", TeamsCtrl.getTeamsById);
router.get("/teams", TeamsCtrl.getTeams);

module.exports = router;
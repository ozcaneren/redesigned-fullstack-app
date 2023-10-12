const express = require("express");
const TeamsCtrl = require("../controllers/teamsController");

const router = express.Router();

router.post("/teams", TeamsCtrl.createTeams);
router.put("/teams/:id", TeamsCtrl.updateTeams);
router.delete("/teams/:id", TeamsCtrl.deleteTeams);
router.get("/teams/:id", TeamsCtrl.getTeamsById);
router.get("/teams", TeamsCtrl.getTeams);

module.exports = router;
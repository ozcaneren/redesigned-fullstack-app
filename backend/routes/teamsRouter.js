const express = require("express");
const TeamsCtrl = require("../controllers/teamsController");

const router = express.Router();

router.get("/teams/members", TeamsCtrl.getTeamMembers);
router.get("/teams/members/:id", TeamsCtrl.getTeamMemberById);
router.post("/teams/members", TeamsCtrl.createTeamMember);
router.put("/teams/members/:id", TeamsCtrl.updateTeamMember);
router.delete("/teams/members/:id", TeamsCtrl.deleteTeamMember);

router.get("/teams/descriptions", TeamsCtrl.getTeamDescriptions);
router.get("/teams/descriptions/:id", TeamsCtrl.getTeamDescriptionById);
router.post("/teams/descriptions", TeamsCtrl.createTeamDescription);
router.put("/teams/descriptions/:id", TeamsCtrl.updateTeamDescription);
router.delete("/teams/descriptions/:id", TeamsCtrl.deleteTeamDescription);

module.exports = router;
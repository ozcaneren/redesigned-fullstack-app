const express = require("express");
const roomCtrl = require("../controllers/roomController");

const router = express.Router();

router.post("/room", roomCtrl.createRoom);
router.put("/room/:id", roomCtrl.updateRoom);
router.delete("/room/:id", roomCtrl.deleteRoom);
router.get("/room/:id", roomCtrl.getRoomById);
router.get("/rooms", roomCtrl.getRooms);

module.exports = router;

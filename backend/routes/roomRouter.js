const express = require("express");
const roomCtrl = require("../controllers/roomController");
const roomEnglishCtrl = require("../controllers/roomEnglishController");

const router = express.Router();

router.post("/room/turkish", roomCtrl.createRoom);
router.put("/room/turkish/:id", roomCtrl.updateRoom);
router.delete("/room/turkish/:id", roomCtrl.deleteRoom);
router.get("/room/turkish/:id", roomCtrl.getRoomById);
router.get("/rooms/turkish", roomCtrl.getRooms);

router.post("/room/english", roomEnglishCtrl.createRoomEnglish);
router.put("/room/english/:id", roomEnglishCtrl.updateRoomEnglish);
router.delete("/room/english/:id", roomEnglishCtrl.deleteRoomEnglish);
router.get("/room/english/:id", roomEnglishCtrl.getRoomEnglishById);
router.get("/rooms/english", roomEnglishCtrl.getRoomsEnglish);

module.exports = router;

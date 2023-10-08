const RoomEnglish = require("../models/roomEnglishModel");

createRoomEnglish = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a room",
    });
  }

  const roomEnglish = new RoomEnglish(body);

  if (!roomEnglish) {
    return res.status(400).json({ success: false, error: err });
  }

  roomEnglish
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: roomEnglish._id,
        message: "Room created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Room not created!",
      });
    });
};

updateRoomEnglish = async (req, res) => {
  try {
    const roomEnglish = await RoomEnglish.findOne({ _id: req.params.id });

    if (!roomEnglish) {
      return res.status(404).json({
        success: false,
        error: "Room not found",
      });
    }

    roomEnglish.roomType_en = req.body.roomType_en;
    roomEnglish.roomTitle_en = req.body.roomTitle_en;
    roomEnglish.roomDescription_en = req.body.roomDescription_en;
    roomEnglish.roomShortDescription_en = req.body.roomShortDescription_en;
    roomEnglish.roomFeatures_en = req.body.roomFeatures_en;
    roomEnglish.roomVisibility_en = req.body.roomVisibility_en;

    const updatedRoomEnglish = await roomEnglish.save();

    return res.status(200).json({
      success: true,
      id: updatedRoomEnglish._id,
      message: "Room updated!",
    });
  } catch (error) {
    return res.status(404).json({
      error,
      message: "Room not updated!",
    });
  }
};

deleteRoomEnglish = async (req, res) => {
  try {
    const roomEnglish = await RoomEnglish.findOneAndDelete({
      _id: req.params.id,
    });

    if (!roomEnglish) {
      return res.status(404).json({ success: false, error: "Room not found" });
    }

    return res.status(200).json({ success: true, data: roomEnglish });
  } catch (error) {
    return res.status(400).json({ success: false, error: error });
  }
}

getRoomEnglishById = async (req, res) => {
  try {
    const roomEnglish = await RoomEnglish.findOne({ _id: req.params.id });

    if (!roomEnglish) {
      return res.status(404).json({ success: false, error: "Room not found" });
    }

    return res.status(200).json({ success: true, data: roomEnglish });
  } catch (error) {
    return res.status(400).json({ success: false, error: error });
  }
}

getRoomsEnglish = async (req, res) => {
  try {
    const roomEnglish = await RoomEnglish.find();
    if (!roomEnglish.length) {
      return res.status(404).json({ success: false, error: "Room not found" });
    }
    return res.status(200).json({ success: true, data: roomEnglish });
  } catch (error) {
    return res.status(400).json({ success: false, error: error });
  }
};

module.exports = {
  createRoomEnglish,
  updateRoomEnglish,
  deleteRoomEnglish,
  getRoomsEnglish,
  getRoomEnglishById,
};
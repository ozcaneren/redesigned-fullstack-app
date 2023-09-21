const Room = require("../models/roomModel");

createRoom = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a room",
    });
  }

  const room = new Room(body);

  if (!room) {
    return res.status(400).json({ success: false, error: err });
  }

  room
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: room._id,
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

updateRoom = async (req, res) => {
  try {
    const room = await Room.findOne({ _id: req.params.id });

    if (!room) {
      return res.status(404).json({
        success: false,
        error: "Room not found",
      });
    }

    room.type = req.body.type;
    room.title = req.body.title;
    room.description = req.body.description;
    room.shortDescription = req.body.shortDescription;
    room.features = req.body.features;
    room.price = req.body.price;
    room.visibility = req.body.visibility;

    const updatedRoom = await room.save();

    return res.status(200).json({
      success: true,
      id: updatedRoom._id,
      message: "Room updated!",
    });
  } catch (error) {
    return res.status(500).json({ error, message: "Room not updated!" });
  }
};

deleteRoom = async (req, res) => {
  try {
    const room = await Room.findOneAndDelete({ _id: req.params.id });

    if (!room) {
      return res.status(404).json({ success: false, error: "Room not found" });
    }

    return res.status(200).json({ success: true, data: room });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error, message: "Room not deleted!" });
  }
};

getRoomById = async (req, res) => {
  Room.findOne({ _id: req.params.id })
    .then((room) => {
      if (!room) {
        return res.status(404).json({
          success: false,
          error: "Room not found",
        });
      }
      return res.status(200).json({
        success: true,
        data: room,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        error,
        message: "Room not found!",
      });
    });
};

getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    if (!rooms.length) {
      return res.status(404).json({ success: false, error: "Rooms not found" });
    }

    return res.status(200).json({ success: true, data: rooms });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error, message: "Rooms not found!" });
  }
};

module.exports = {
  createRoom,
  updateRoom,
  deleteRoom,
  getRooms,
  getRoomById,
};

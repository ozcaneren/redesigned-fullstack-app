const teamsModel = require('../models/teamsModel');

createTeams = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide teams',
    });
  }

  const teams = new teamsModel(body);

  if (!teams) {
    return res.status(400).json({ success: false, message: err });
  }

  teams
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: teams._id,
        message: 'Teams created!',
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Teams not created!',
      });
    });
}

updateTeams = async (req, res) => {
  try {
    const teams = await teamsModel.findOne({ _id: req.params.id });

    if (!teams) {
      return res.status(404).json({
        success: false,
        message: 'Teams not found',
      });
    }

    teams.mainTitle = req.body.mainTitle;
    teams.mainTitle_en = req.body.mainTitle_en;
    teams.mainText = req.body.mainText;
    teams.mainText_en = req.body.mainText_en;
    teams.cardIcon = req.body.cardIcon;
    teams.cardTitle = req.body.cardTitle;
    teams.cardTitle_en = req.body.cardTitle_en;
    teams.cardText = req.body.cardText;
    teams.cardText_en = req.body.cardText_en;
    teams.cardIcon1 = req.body.cardIcon1;
    teams.cardTitle1 = req.body.cardTitle1;
    teams.cardTitle1_en = req.body.cardTitle1_en;
    teams.cardText1 = req.body.cardText1;
    teams.cardText1_en = req.body.cardText1_en;
    teams.cardIcon2 = req.body.cardIcon2;
    teams.cardTitle2 = req.body.cardTitle2;
    teams.cardTitle2_en = req.body.cardTitle2_en;
    teams.cardText2 = req.body.cardText2;
    teams.cardText2_en = req.body.cardText2_en;
    teams.cardIcon3 = req.body.cardIcon3;
    teams.cardTitle3 = req.body.cardTitle3;
    teams.cardTitle3_en = req.body.cardTitle3_en;
    teams.cardText3 = req.body.cardText3;
    teams.cardText3_en = req.body.cardText3_en;
    teams.cardIcon4 = req.body.cardIcon4;
    teams.cardTitle4 = req.body.cardTitle4;
    teams.cardTitle4_en = req.body.cardTitle4_en;
    teams.cardText4 = req.body.cardText4;
    teams.cardText4_en = req.body.cardText4_en;
    teams.cardIcon5 = req.body.cardIcon5;
    teams.cardTitle5 = req.body.cardTitle5;
    teams.cardTitle5_en = req.body.cardTitle5_en;
    teams.cardText5 = req.body.cardText5;
    teams.cardText5_en = req.body.cardText5_en;

    teams
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: teams._id,
          message: 'Teams updated!',
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Teams not updated!',
        });
      });
    } catch (error) {
      console.log(error);
    }
}

deleteTeams = async (req, res) => {
  try {
    const teams = await teamsModel.findOneAndDelete({ _id: req.params.id });

    if (!teams) {
      return res
        .status(404)
        .json({ success: false, message: 'Teams not found!' });
    }

    return res.status(200).json({ success: true, data: teams });
  } catch (error) {
    console.log(error);
  }
}

getTeamsById = async (req, res) => {
  try {
    const teams = await teamsModel.findOne({ _id: req.params.id });
    if (!teams) {
      return res
        .status(404)
        .json({ success: false, message: 'Teams not found!' });
    }
    return res.status(200).json({ success: true, data: teams });
  } catch (error) {
    console.log(error);
  }
}

getTeams = async (req, res) => {
  try {
    const teams = await teamsModel.find({});
    return res.status(200).json({ success: true, data: teams });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createTeams,
  updateTeams,
  deleteTeams,
  getTeams,
  getTeamsById,
}
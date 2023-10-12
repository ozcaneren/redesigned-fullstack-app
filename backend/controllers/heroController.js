const heroModel = require('../models/heroModel');

createHero = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide a hero',
    });
  }

  const hero = new heroModel(body);

  if (!hero) {
    return res.status(400).json({ success: false, message: err });
  }

  hero
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: hero._id,
        message: 'Hero created!',
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Hero not created!',
      });
    });
}

updateHero = async (req, res) => {
  try {
    const hero = await heroModel.findOne({ _id: req.params.id });

    if (!hero) {
      return res.status(404).json({
        success: false,
        message: 'Hero not found',
      });
    }

    hero.mainText = req.body.mainText;
    hero.mainText_en = req.body.mainText_en;
    hero.subText = req.body.subText;
    hero.subText_en = req.body.subText_en;

    hero
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: hero._id,
          message: 'Hero updated!',
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Hero not updated!',
        });
      });
  } catch (error) {
    console.log(error)
  }
}

deleteHero = async (req, res) => {
  try {
    const hero = await heroModel.findOneAndDelete({ _id: req.params.id });

    if (!hero) {
      return res
        .status(404)
        .json({ success: false, message: 'Hero not found!' });
    }

    return res.status(200).json({ success: true, data: hero });
  } catch (error) {
    console.log(error);
  }
}

getHeroById = async (req, res) => {
  try {
    const hero = await heroModel.findOne({ _id: req.params.id });
    if (!hero) {
      return res
        .status(404)
        .json({ success: false, message: 'Hero not found!' });
    }
    return res.status(200).json({ success: true, data: hero });
  } catch (error) {
    console.log(error);
  }
}

getHeroes = async (req, res) => {
  try {
    const heroes = await heroModel.find({});
    return res.status(200).json({ success: true, data: heroes });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createHero,
  updateHero,
  deleteHero,
  getHeroes,
  getHeroById,
};
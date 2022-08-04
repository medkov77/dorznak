const express = require("express");
const Signs = require("../models/Signs");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Signs.find().sort({ _id: 1 }).limit(5).skip(3).exec();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});

module.exports = router;

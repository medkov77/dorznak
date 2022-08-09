const express = require("express");
const Signs = require("../models/Signs");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const limit = req.query.limit;
  const page = req.query.page;

  try {
    const size = (await Signs.find()).length;
    if (page === "all") {
      const allList = await Signs.find();
      res.status(200).send({ list: allList, size: size });
    } else {
      const skip = (page - 1) * limit;
      const list = await Signs.find()
        .sort({ _id: 1 })
        .limit(limit)
        .skip(skip)
        .exec();
      res.status(200).send({ list: list, size: size });
    }
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});

router.post("/search", async (req, res) => {
  try {
    const text = req.body.payload.trim();
    const search = await Signs.find({
      name: {
        $regex: new RegExp(text, "i"),
      },
    }).exec();
    res.status(200).send(search);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.get("/:signId", async (req, res) => {
  try {
    const { signId } = req.params;
    const list = await Signs.findById(signId).exec();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});

router.delete("/:signId", async (req, res) => {
  try {
    const { signId } = req.params;
    const list = await Signs.deleteOne({ _id: signId });
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});

router.patch("/:signId", async (req, res) => {
  try {
    const { signId } = req.params;
    const updatedSign = await Signs.findByIdAndUpdate(
      signId,
      req.body.payload,
      {
        new: true,
      }
    );
    res.status(200).send(updatedSign);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});
router.put("/", async (req, res) => {
  try {
    const addedSign = await Signs.insertOne(req.body.payload);
    res.status(200).send(addedSign);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});

module.exports = router;

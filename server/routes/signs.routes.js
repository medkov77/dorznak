const express = require("express");
const Signs = require("../models/Signs");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const limit = req.query.limit;
  const page = req.query.page;
  const sorted = req.query.sort;
  const direction = req.query.direction;
  const filter = req.query.filter;

  try {
    const size = (await Signs.find()).length;
    if (page === "all") {
      const allList = await Signs.find();
      res.status(200).send({ list: allList, size: size });
    } else {
      const skip = (page - 1) * limit;
      if (filter === "all") {
        const list = await Signs.find()
          .sort({ [sorted]: direction })
          .limit(limit)
          .skip(skip)
          .exec();
        res.status(200).send({ list: list, size: size });
      } else {
        const filtredList = await Signs.find({ form: `${filter}` })
          .sort({ [sorted]: direction })
          .limit(limit)
          .skip(skip)
          .exec();
        res.status(200).send({ list: filtredList, size: filtredList.length });
      }
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
    const addedSign = await Signs.create({
      sizes: [1, 2, 3, 4],
      films: ["А", "Б", "В"],
      type: "warning",
      ...req.body.payload,
    });
    res.status(200).send(addedSign);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});

module.exports = router;

const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
  },

  {
    timeseries: true,
  }
);

module.exports = model("Idn", schema);

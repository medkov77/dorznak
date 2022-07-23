const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    form: {
      type: Object,
    },
  },

  {
    timeseries: true,
  }
);

module.exports = model("Pricelist", schema);

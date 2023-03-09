const mongoose = require("mongoose");

const ttn = new mongoose.Schema(
  {
    ttn: {
      type: String,
      required: [true, "set ttn number"],
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

const Ttn = mongoose.model("ttns", ttn);

module.exports = Ttn;

const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: String,

    location: String,

    price: Number,

    description: String,

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Property", propertySchema);
const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      minlength: 7,
      maxlength: 7,
    },
  },
  { collection: "items" }
);

const items = mongoose.model("items", itemsSchema);
module.exports = items;

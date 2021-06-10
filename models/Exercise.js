const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a type for exercise"
    },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for exercise"
  },
  duration: {
    type: Number,
    required: "Enter a duration"
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
    required: "Enter a duration"
  },
  sets: {
    type: Number,
    required: "Enter a duration"
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;

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
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  isCardio: {
    type: Boolean,
    default: false
  }
});

// View the combined weight of multiple exercises from the past seven workouts on the stats page.

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;

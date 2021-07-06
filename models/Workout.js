const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
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
    }
  ]
  
});

// exercises: {
  //   type: Array,
  //   required: "Enter at least one exercise!"
  // }

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// schemas defines the structure of a particular document
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// mongoose model is a wrapper on the mongoose schema
// provides an interface to the database for creating, querying,
// updating, deleting records, etc.

//collection creation
module.exports = mongoose.model("Workout", workoutSchema);

const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

// GET all workouts
router.get("/", (res, req) => {
  req.json({ mssg: "Get all workouts" });
});

// GET a single workouts
router.get("/:id", (res, req) => {
  req.json({ mssg: "Get a single workout" });
});

// POST a workout
router.post("/", async (res, req) => {
  const { title, load, reps } = req.body;

  try {
    // create new document in my database
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // req.json({ mssg: "Add a workout" });
});

// DELETE a workout
router.delete("/:id", (res, req) => {
  req.json({ mssg: "Delete a workout" });
});

// PATCH a workout
router.patch("/:id", (res, req) => {
  req.json({ mssg: "Update a workout" });
});

module.exports = router;

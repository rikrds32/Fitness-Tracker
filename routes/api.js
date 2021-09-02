const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }
    ])
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.status(400).json(err)
    })
});
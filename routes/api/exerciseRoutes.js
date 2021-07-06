/* TODO:
Add exercises to the most recent workout plan.

Add new exercises to a new workout plan.

View the combined weight of multiple exercises from the past seven workouts on the stats page.

View the total duration of each workout from the past seven workouts on the stats page.
*/

const router = require("express").Router();
const Exercise = require("../../models/Exercise.js");

router.post("/", ({ body }, res) => {
  Exercise.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/:id", ({ body }, res) => {
  Exercise.updateOne(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/", (req, res) => {
  Exercise.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;

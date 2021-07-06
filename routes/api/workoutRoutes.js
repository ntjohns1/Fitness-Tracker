const router = require("express").Router();
const Workout = require("../../models/Workout.js");

router.post("/", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id,
    {
      $push: { exercises: body }
    }
  )
    .then(dbWorkout => {
      // console.log('Exercise Data: ', dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      }
    }
  ])
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.get("/range", (req, res) => {
//   Workout.find({})
//   .sort({ date: -1 })
//   .then(dbWorkout => {
//     console.log(res.json(dbWorkout));
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   });
// });
router.get("/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalWeight: { $sum: '$exercises.weight' },
        totalDuration: { $sum: '$exercises.duration' }
      }
    },
    { $limit: 7 }
  ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;

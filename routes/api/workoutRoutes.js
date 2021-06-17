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

router.put("/:id", ({ body }, res) => {
  Workout.updateMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      console.log(res.json(dbWorkout));
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
    { $addFields : { totalWeight: { $sum : '$exercises.weight' } } },
    { $limit : 7 }
  ])
  .then(dbWorkout => {
    console.log(res.json(dbWorkout));
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;

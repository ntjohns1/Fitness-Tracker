const router = require('express').Router();
const exerciseRoutes = require('./exerciseRoutes');
const workoutRoutes = require('./workoutRoutes');


router.use('/exercise', exerciseRoutes);
router.use('/workouts', workoutRoutes);


module.exports = router;
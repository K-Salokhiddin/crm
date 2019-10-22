const express = require('express');
const passport = require('../middelware/passport');
const controller = require('../controllers/order');
const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), controller.getAll);
router.post('/', passport.authenticate('jwt', { session: false }), controller.create);

module.exports = router;
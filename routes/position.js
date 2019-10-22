const express = require('express');
const controller = require('../controllers/position');
const passport = require('../middelware/passport');
const router = express.Router();

router.get('/:categoryId', passport.authenticate('jwt', { session: false }), controller.getByCategoryId);
router.post('/', passport.authenticate('jwt', { session: false }), controller.create);
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.delete);
router.patch('/:id', passport.authenticate('jwt', { session: false }), controller.updateById);

module.exports = router;
const {Router} = require('express');
const router = Router();
const {getTurn, getAllTurns, createTurn, modifyTurn} = require("../controllers/turns.controller");
const {validatorCreateCustomer} = require('../validators')

/**
 * Get Turn details
 */
router.get('/:id', getTurn);

/**
 * Get list of Turns
 */
router.get('/', getAllTurns);

/**
 * Create Turn in DB
 */
router.post('/',validatorCreateCustomer, createTurn);

/**
 * modify Turn-status in DB
 */
router.put('/:id', modifyTurn);



module.exports = router;
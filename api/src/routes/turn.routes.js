const {Router} = require('express');
const router = Router();
const {getTurn, getAllTurns, createTurn, modifyTurn, getTurnByDI} = require("../controllers/turns.controller");
const {validatorCreateCustomer, validatorCreateTurn} = require('../validators')

/**
 * Get Turn details
 */
router.get('/:id', getTurn);

/**
 * Get Turn details
 */
router.get('/usturn/:doc', getTurnByDI);

/**
 * Get list of Turns
 */
router.get('/', getAllTurns);

/**
 * Create Turn in DB
 */
router.post('/',validatorCreateCustomer, validatorCreateTurn, createTurn);

/**
 * modify Turn-status in DB
 */
router.put('/:id', modifyTurn);



module.exports = router;
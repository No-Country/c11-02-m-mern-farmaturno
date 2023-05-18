const {Router} = require('express');
const router = Router();
const {validatorMongoId, validatorCreateCustomer, validatorPhoneNumber} = require('../validators');
const {getCustomer, getCustomers, createCustomer, updateCustomer, deleteCustomer} = require('../controllers/customer.controller');


/**
 * Get customer details
 */
router.get('/:id',validatorMongoId, getCustomer);

/**
 * Get list of customers
 */
router.get('/', getCustomers);

/**
 * Create customer in DB
 */
router.post('/',validatorCreateCustomer, createCustomer);

/**
 * Create customer in DB
 */
router.put('/:id',validatorMongoId, validatorPhoneNumber, updateCustomer);

/**
 * Delete customer
 */
router.delete('/:id',validatorMongoId, deleteCustomer);




module.exports = router;
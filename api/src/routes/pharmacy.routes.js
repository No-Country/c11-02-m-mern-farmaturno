const {Router} = require('express');
const {validatorCreatePharmacy} = require('../validators');
const {getMyPharmacy, createPharmacy} = require('../controllers/pharmacy.controller');
const router = Router();


/**
 * Get pharmacy details by Name
 */
router.get('/:pharmacyName', getMyPharmacy);

/**
 * Create pharmacy in DB
 */
router.post('/',validatorCreatePharmacy, createPharmacy);




module.exports = router;
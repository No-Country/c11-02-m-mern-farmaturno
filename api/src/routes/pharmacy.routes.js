const {Router} = require('express');
const {validatorCreatePharmacy} = require('../validators');
const {getMyPharmacy, createPharmacy} = require('../controllers/phamacy.controller');
const router = Router();



router.get('/:pharmacyName', getMyPharmacy);
router.post('/',validatorCreatePharmacy, createPharmacy);









module.exports = router;
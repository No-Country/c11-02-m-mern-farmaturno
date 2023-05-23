const {Router} = require('express');
const {validatorCreatePharmacy} = require('../validators');
const {getMyPharmacy, createPhamacy} = require('../controllers/phamacy.controller');
const router = Router();



router.get('/:pharmacyName', getMyPharmacy);
router.post('/',validatorCreatePharmacy, createPhamacy);









module.exports = router;
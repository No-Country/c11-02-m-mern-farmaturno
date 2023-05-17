const {check} = require('express-validator');
const validateResults = require('../utils/handleValidators');


const validatorCreateCustomer = [

  check('name')
  .exists()
  .notEmpty(),
  check('surName')
  .exists()
  .notEmpty(),
  check('identificationNumber')
  .exists()
  .notEmpty()
  .isLength({min: 6, max: 10}),
  check('mobilePhone')
  .exists()
  .notEmpty()
  .isLength({min: 10, max: 10}),

  (req, res, next) => {
    return validateResults(req, res, next);
  }
]





module.exports = {
  validatorCreateCustomer,
}
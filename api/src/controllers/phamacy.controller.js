const {matchedData} = require('express-validator');
const {pharmacyModel} = require('../models');
const {handleHttpError} = require('../utils/handleError');

/**
 * Get Pharmacy data
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getMyPharmacy = async (req, res) => {

  try {

    const company = req.params.pharmacyName;
    const result = await pharmacyModel.findOne({companyName: company})
    if(!result){
      res.status(404).send('Data not Found');
      return;
    }
    res.status(200).json({result});
    
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 500, "getCustomer", error);
  }
}

/**
 * Create Pharmacy in DB
 * @param {*} req 
 * @param {*} res 
 */
const createPharmacy = async (req, res) => {


  try {

    const body = matchedData(req);

    const create = await pharmacyModel.create(body);
    res.status(201).json({msg: 'Pharmacy Created', data: create});
    
  } catch (error) {
    if (error.name === 'MongoServerError' && error.code === 11000){
      handleHttpError(res, "Company Already Exist", 400, "createPharmacy", error);
      return;
    }
    handleHttpError(res, "Internal Server Error", 500, "getCustomer", error);
  }
}


module.exports = {
  createPharmacy,
  getMyPharmacy,
}
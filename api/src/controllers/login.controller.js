//const {matchedData} = require('express-validator');
const {pharmacyModel} = require('../models');
const {handleHttpError} = require('../utils/handleError');

/**
 * Get Pharmacy data
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const loginMyPharmacy = async (req, res) => {

  try {
    const data = await pharmacyModel.findOne({
        userName: req.body.userName,
        password: req.body.password
      });
    if(!data){
        handleHttpError(res, "User or Password Not Found", 404, "loginMyPharmacy");
        return;
    }
    res.json({
        success: true,
        data:{
          _id: data._id,
          userName: data.userName,
          companyName: data.companyName
        }
    }).status(200);

  } catch (error) {
    handleHttpError(res, "Internal Server Error", 500, "loginMyPharmacy", error);
  }
}



module.exports = {
    loginMyPharmacy
}
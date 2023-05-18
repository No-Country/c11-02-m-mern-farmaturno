const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { customerModel } = require("../models");

/**
 * Get customer details
 * @param {*} req
 * @param {*} res
 */
const getCustomer = async (req, res) => {
  try {
    
    req = matchedData(req);
    console.log(req.id)
    const data = await customerModel.findOne({
      _id: req.id
    });
    
    if (!data){
      handleHttpError(res, "Customer Not Found", 404, "getCustomer");
      return;
    } else {
      res
        .json(data)
        .status(200);
      return;
    }
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 500, "getCustomer", error);
  }
};

/**
 * Get customer list from DataBase
 * @param {*} req
 * @param {*} res
 */
const getCustomers = async (req, res) => {
  try {
    const data = await customerModel.find();
    if (!data){
      handleHttpError(res, "Customers Not Found", 404, "getCustomers");
      return;
    } else {
      res
        .json(data)
        .status(200);
      return;
    }
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 500, "getCustomers", error);
  }
};

/**
 * Create customer in DataBase
 * @param {*} req
 * @param {*} res
 */
const createCustomer = async (req, res) => {
  try {
    req = matchedData(req);
    
    const data = await customerModel(req);
    
    data.turnHistory = [{
      registry: new Date(Date.now()).toISOString()
    }];

    await data.save();

    res
      .json({
        success: true,
        message: "Customer Created",
        data: data
      })
      .status(200);
    return;

  } catch (error) {
    if (error.name === 'MongoServerError' && error.code === 11000){
      handleHttpError(res, "Mobile phone already exists", 422, "createCustomer", error);
    }
    else {
      handleHttpError(res, "Internal Server Error", 400, "createCustomer", error);
    }
  }
};

/**
 * Updated customer in DataBase
 * @param {*} req
 * @param {*} res
 */
const updateCustomer = async (req, res) => {
  try {
    req = matchedData(req);
    console.log(req)
    const data = await customerModel.findOneAndUpdate(
      { _id: req.id },
      { mobilePhone: req.mobilePhone },
      { new: true }
      );
    if (!data){
      handleHttpError(res, "Customer Not Found", 404, "getCustomer");
      return;
    } else {
      res
        .json({
          success: true,
          message: "Customer Updated",
          data: data
        })
        .status(200);
      return;
    }
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 400, "updateCustomer", error);
  }
};

/**
 * Delete customer from DataBase
 * @param {*} req
 * @param {*} res
 */
const deleteCustomer = async (req, res) => {
  try {
    req = matchedData(req);
    const data = await customerModel.findOneAndDelete({
      _id: req.id
    });
    if (!data){
      handleHttpError(res, "Customer Not Found", 404, "getCustomer");
      return;
    } else {
      res
        .json({
          success: true,
          message: "Customer Deleted",
          data: data
        })
        .status(200);
      return;
    }
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 500, "deleteCustomer", error);
  }
};

module.exports = {
  getCustomer,
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};

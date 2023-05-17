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
    const data = await customerModel.findOne({
      identificationNumber: req.params.id
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
    const data = await customerModel(req.body).save();
    res
      .json({
        message: "Customer Created",
        data: data
      })
      .status(200);
    return;
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 400, "createCustomer", error);
  }
};

/**
 * Updated customer in DataBase
 * @param {*} req
 * @param {*} res
 */
const updateCustomer = async (req, res) => {
  try {
    const data = await customerModel.findOneAndUpdate(
      { identificationNumber: req.params.id },
      { mobilePhone: req.body.mobilePhone },
      { new: true }
      );
    if (!data){
      handleHttpError(res, "Customer Not Found", 404, "getCustomer");
      return;
    } else {
      res
        .json({
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
    const data = await customerModel.findOneAndDelete({
      identificationNumber: req.params.id
    });
    if (!data){
      handleHttpError(res, "Customer Not Found", 404, "getCustomer");
      return;
    } else {
      res
        .json({
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

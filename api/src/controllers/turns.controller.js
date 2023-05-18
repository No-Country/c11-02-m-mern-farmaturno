const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { turnModel, customerModel } = require("../models");

/**
 * Get Turn by id
 * @param {*} req
 * @param {*} res
*/
const getTurn = async (req, res) => {
    const id = req.params.id.toString();
    const find= await turnModel.findById(id);
    try {
      if (!find) {
      handleHttpError(res, "Id not found", 404, "getTurn");
      return;
     } else {
      res.status(200).send(find);
     }
    } catch (error) {
      handleHttpError(res, "Internal Server Error", 500, "getTurn", error);
    }
};

/**
 * Get Turns from DataBase
 * @param {*} req
 * @param {*} res
*/
const getAllTurns = async (req, res) => {
  const turns = await turnModel.find({});
    try {
      if(!turns.length){
        handleHttpError(res, "Turns not Found", 404, "getAllTurns");
        return;
      }else{
        res.status(200).send(turns);
      }
    } catch (error) {
      handleHttpError(res, "Internal Server Error", 500, "getAllTurns", error);
    }
};

/**
 * Create Turn in DataBase
 * @param {*} req
 * @param {*} res
*/
const createTurn = async (req, res) => {
    const body=req.body;
    const user= await customerModel.findById(body.customer.customerId);
    try {
      if (!user) {
        handleHttpError(res, "User not registred", 404, "createTurn");
        return;
      }else{
      await turnModel.create(body);
      res.status(200).send("Turn created");
      }
    } catch (error) {
      handleHttpError(res, "Internal Server Error", 400, "createTurn", error);
    }
};

/**
 * Modify Turn-status in DataBase
 * @param {*} req
 * @param {*} res
 */
const modifyTurn = async (req, res) => {
   const id = req.params.id.toString();
   await turnModel.updateOne({ _id: id }, {status: false });
   try {
     const find= await turnModel.findById(id);
      res.status(200).send("Turn update: "+find);
   } catch (error) {
      handleHttpError(res, "Internal Server Error", 500, "modifyTurn", error);
    }
  };

  module.exports = {
    getTurn,
    getAllTurns,
    createTurn,
    modifyTurn
  };
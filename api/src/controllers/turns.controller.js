const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { turnModel, customerModel } = require("../models");
const moment = require('moment');

/**
 * Get Turn by id
 * @param {*} req
 * @param {*} res
 */
const getTurn = async (req, res) => {
  try {
    const id = req.params.id.toString();
    const find = await turnModel.findById(id);
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
 * Get Turn by user document
 * @param {*} req
 * @param {*} res
 */
const getTurnByDI = async (req, res) => {
  try {
    const doc = req.params.doc;
    const find = await turnModel.find({
      "customer.identificationNumber": { $eq: doc },
    });
    if (!find.length) {
      handleHttpError(res, "Turns for document not found", 404, "getTurnByDI");
      return;
    } else {
      res.status(200).send(find);
    }
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 500, "getTurnByDI", error);
  }
};

/**
 * Get Turn by Hour
 * @param {*} req
 * @param {*} res
 */
const getTurnByHour = async (req, res) => {
  try {
    const hour = req.params.hour.toString();
    const find = await turnModel.find({ timeSlot: { $eq: hour }
    });
    if (!find.length) {
      handleHttpError(res, "Turns for hour not found", 404, "getTurnByHour");
      return;
    } else {
      res.status(200).send(find);
    }
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 500, "getTurnByHour", error);
  }
};

/**
 * Get Turns from DataBase
 * @param {*} req
 * @param {*} res
 */
const getAllTurns = async (req, res) => {
  try {
    const turns = await turnModel.find({});
    if (!turns.length) {
      handleHttpError(res, "Turns not Found", 404, "getAllTurns");
      return;
    } else {
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
  try {
    const body = matchedData(req);
    const user = await customerModel.find({
      identificationNumber: { $eq: body.identificationNumber },
    });
    const newUser = {
      name: body.name,
      surName: body.surName,
      identificationNumber: body.identificationNumber,
      mobilePhone: body.mobilePhone,
    };
    const newTurn = {
      timeSlot: body.timeSlot,
      customer: {
        customerId: body.customerId,
        name: body.name,
        surName: body.surName,
        identificationNumber: body.identificationNumber,
        mobilePhone: body.mobilePhone,
      },
    };
    if (!user.length) {
      await customerModel.create(newUser);
      await customerModel.updateOne(
        { identificationNumber: body.identificationNumber },
        { turnHistory: [{ registry: new Date(Date.now()).toISOString(), timeSlot:moment(body.timeSlot, "h:mm").format("HH:mm")}] }
      );
      await turnModel.create(newTurn);
      res.status(200).send("User and Turn created");
    } else {
      await turnModel.create(newTurn);
      await customerModel.updateOne(
        { identificationNumber: body.identificationNumber },
        {
          $push: {
            turnHistory: [{ registry: new Date(Date.now()).toISOString(), timeSlot:moment(body.timeSlot, "h:mm").format("HH:mm")}],
          },
        }
      );
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
  try {
    const id = req.params.id.toString();
    await turnModel.updateOne({ _id: id }, { status: false });
    const find = await turnModel.findById(id);
    res.status(200).send("Turn update: " + find);
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 500, "modifyTurn", error);
  }
};

module.exports = {
  getTurn,
  getAllTurns,
  createTurn,
  modifyTurn,
  getTurnByDI,
  getTurnByHour
};

const mongoose = require('mongoose');
const moment = require('moment');
const { dateFormat } = require('../utils/handleDate');

const dateSis = dateFormat();

const LogSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      default: dateSis,
    },
    Data: {
      type: Object,
      require: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('log', LogSchema);
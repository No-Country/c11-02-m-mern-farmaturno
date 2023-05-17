const customer = require('./customer.routes');
const express = require("express");

const routes = (app) => {
  app.use('/api/customer', customer);
}


module.exports = routes;
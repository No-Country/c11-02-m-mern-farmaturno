const customer = require('./customer.routes');

const routes = (app) => {

  app.use('/api/customer', customer);
}


module.exports = routes;
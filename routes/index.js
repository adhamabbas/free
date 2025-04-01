const userRoute = require('./userRoute');
const authRoute = require('./authRoute');
const ProductRoute = require('./productRoute');






const mountRoutes = (app) => {
  
  app.use('/api/v1/users', userRoute);
  app.use('/api/v1/auth', authRoute);
  app.use('/api/v1/products', ProductRoute);


}
module.exports = mountRoutes;

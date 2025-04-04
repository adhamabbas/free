const userRoute = require('./userRoute');
const authRoute = require('./authRoute');
const ProductRoute = require('./productRoute');
const cartRoute = require('./cartRoute');
const aiRoute = require('./aiRoutes'); // Import the new AI route

const mountRoutes = (app) => {
  app.use('/api/v1/users', userRoute);
  app.use('/api/v1/auth', authRoute);
  app.use('/api/v1/products', ProductRoute);
  app.use('/api/v1/cart', cartRoute);
  app.use('/api/v1/ai', aiRoute); // Add the AI route
};

module.exports = mountRoutes;
import router from './router';

const apiRoutes = (app) => {
  app.use('/api', router);
};

export default apiRoutes;


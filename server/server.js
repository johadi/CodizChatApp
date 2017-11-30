import express from 'express';
import bodyParser from 'body-parser';
import morganLogger from 'morgan';
import http from 'http';
import path from 'path';
import dotenv from 'dotenv';
import colors from 'colors';

import logger from './helpers/logger';
import mongooseSetting from './config/mongooseSetting';
import apiRoutes from './routes';

dotenv.config();
const port = process.env.PORT || 7000;
const app = express();
app.use(morganLogger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', port);
app.use(express.static(path.join(__dirname, '../public')));
// database setting
mongooseSetting()
  .then(() => {
    logger.info('database connected');
    apiRoutes(app);
    const server = http.createServer(app);
    server.listen(app.get('port'), (err) => {
      if (err) {
        // call winston logger
        logger.error(err);
      }
      // call winston logger
      logger.info(`App running on port ${app.get('port')}`.blue);
    });
  })
  .catch(() => logger.error('could\'t connect to database'));
// Api routes
export default app;

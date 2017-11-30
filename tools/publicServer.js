// This file is used to power our production.
import express from 'express';
import path from 'path';
import compression from 'compression';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import morganLogger from 'morgan';
import dotenv from 'dotenv';

import logger from '../server/helpers/logger';
import mongooseSetting from '../server/config/mongooseSetting';
import apiRoutes from '../server/routes/index';

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
// Create winston logger

app.use(morganLogger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static('public'));
app.use(express.static('production'));
app.use(favicon(path.join(__dirname, 'favicon2.ico')));
// database setting
mongooseSetting()
  .then(() => {
    logger.info('database connected');
    // api routes
    apiRoutes(app);

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../production/index.html'));
    });

    app.listen(port, (err) => {
      if (err) {
        return logger.error(err);
      }
      logger.info('app running on port', port);
    });
  })
  .catch(() => logger.error('could\'t connect to database'));

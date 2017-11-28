// This file is only used for production
import fse from 'fs-extra';
import colors from 'colors';
import winston from 'winston';

// Create winston logger
const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ colorize: true })
  ]
});
const source = './client/src/build';
const target = './production';
fse.copy(source, target)
  .then(() => logger.info('index.html written to /production'.green))
  .catch(err => logger.error(err));

import winston from 'winston';
// Create winston logger
const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ colorize: true })
  ]
});
export default logger;

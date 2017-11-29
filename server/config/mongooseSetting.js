import mongoose from 'mongoose';
import dotenv from 'dotenv';

import logger from '../helpers/logger';

dotenv.config();

const mongooseSetting = () => {
  mongoose.connect(process.env.DATABASE_URL)
    .then(() => logger.info('database connected'))
    .catch(() => logger.error('could\'t connect to database'));
};

export default mongooseSetting;

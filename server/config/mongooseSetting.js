import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongooseSetting = (logger) => {
  mongoose.connect(process.env.DATABASE_URL)
    .then(() => logger.info('database connected'))
    .catch(() => logger.error('could\'t connect to database'));
};

export default mongooseSetting;

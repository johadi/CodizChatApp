import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongooseSetting = () =>
  mongoose.connect(process.env.DATABASE_URL);

export default mongooseSetting;

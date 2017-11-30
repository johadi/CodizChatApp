import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongooseSetting = async () =>
  mongoose.connect(process.env.DATABASE_URL);

export default mongooseSetting;

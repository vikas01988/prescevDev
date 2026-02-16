import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  mongoose.connection.on('connected', () => console.log('Database Connected'));
  mongoose.connection.on('error', (err) =>
    console.log('Database connection error:', err),
  );

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export default connectDB;

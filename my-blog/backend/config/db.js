const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/myblog';
    if (!process.env.MONGODB_URI && !process.env.MONGO_URI) {
      console.warn('No MONGODB_URI env var found — falling back to', mongoUri);
    }

    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    console.warn('Continuing without a MongoDB connection — some features will not work until a MongoDB server is available.');
    // Do not exit process so developer can still run the server for UI/testing.
  }
};

module.exports = connectDB;

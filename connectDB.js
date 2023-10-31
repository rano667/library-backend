const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const databaseURI = 'mongodb+srv://ranjan:ranjan@cluster0.gcryh.mongodb.net/test';
    await mongoose.connect(databaseURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB database');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the application on database connection error
  }
};

module.exports = connectDB;

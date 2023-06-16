const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGO_DB_CONNECTION_STRING
    );
    console.log("Connected to mongo db", connect.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

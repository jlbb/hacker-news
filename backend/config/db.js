const mongoose = require("mongoose");

const connectDB = async () => {
  const dbConnection = process.env.MONGO_DB_URI || "mongodb://127.0.0.1:27017";

  try {
    await mongoose.connect(dbConnection, {
      dbName: "hacker-news",
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

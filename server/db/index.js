const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(
    process.env.CONNECTION_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;

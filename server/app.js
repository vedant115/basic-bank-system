const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const db = require("./db");
const userRouter = require("./routes/user-router");

const app = express();
dotenv.config();
const apiPort = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Server is Running :)");
});

app.use("/api", userRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

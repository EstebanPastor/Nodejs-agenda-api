const express = require("express");
const errorHandler = require("./middlewares/errorHandler.js");
const connectDB = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();

connectDB()
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, () => {});

const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const { readdirSync } = require("fs");
var fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());
const useRoutes = require("./routes/user");

app.use("/", useRoutes);

// routes
readdirSync("./routes").map((r) => app.use(require("./routes/" + r)));

// app.use(fileUpload({ useTempFiles: true }));

// database
mongoose
  .connect(process.env.DATABASE_URL, {})
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Database connection unsuccessful", err));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server has started on port ${port}...`);
});

// console.log((+new Date() * Math.random()).toString().substring(0, 1));

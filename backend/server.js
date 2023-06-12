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
const useRoutes = require("./routes/user");

app.use("/", useRoutes);

// routes
readdirSync("./routes").map((r) => app.use(require("./routes/" + r)));

// app.use(fileUpload({ useTempFiles: true }));

// database
mongoose
  .connect(process.env.DATABASE_URL, {})
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log("Database connection unsuccessful", err));

const port = process.env.PORT || 8000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server has started on port ${port}...`);
});

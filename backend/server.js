const express = require("express");
var cors = require("cors");
var fileUpload = require("express-fileupload");
const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));
dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connection successful"))
  .catch(() => console.log("Database connection unsuccessful"));

// mongoose.set('useCreateIndex', true)
const port = process.env.PORT || 8000;

app.use(express.json());
readdirSync("./routes").map((r) => app.use(require("./routes/" + r)));
app.listen(port, () => {
  console.log("Server has started on port " + port);
});

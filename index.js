const mongoose = require("mongoose");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const multer = require("multer");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// // Models
// const userModel = require("./models/Users");
// const articleModel = require("./models/Articles");



// // Endpoints Authorization
// const AuthEndpoints = require("./endpoints/Auth");
// app.use(AuthEndpoints);


// // EndPoints Users
// const endPointsUsers = require("./endpoints/Users_EndPoints");
// app.use(endPointsUsers);


// // Middleware ErrorHandler
// const debug = require("./middlewares/debug");
// app.use(debug.errorHandler);

mongoose
  .connect(process.env.MONGODB_APIKEY)
  .then((response) => {
    console.log("DB Connected...");
    app.listen(process.env.PORT, async () =>
      console.log("Server listening on port " + process.env.PORT)
    );
  })
  .catch((err) => console.error(err));
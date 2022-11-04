const express = require("express");
const posstRoute = require("./route/Post");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();

try {
  mongoose.connect(
    process.env.DB_CONNECTION,

    (err) => {
      if (err) console.error(err.message);
      else console.log("DB has connected Successfully");
    }
  );
  mongoose.Connection;
  app.use(express.json());

  app.use("/post", posstRoute);
} catch (ex) {
  console.error.bind(ex.message);
}

app.listen(process.env.PORT, () =>
  console.log(`Server is running at ${process.env.PORT}`)
);

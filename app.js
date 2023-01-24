const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorMiddleware = require("./middlewares/errors");

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "config/config.env" });

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
    credentials: false,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Import all the routes here...
const products = require("./routes/product");
const order = require("./routes/order");

app.use(`/api/v1`, products);
app.use(`/api/v1`, order);


app.get("/", (_, res) =>
  res.send(
    `<h1>Hi :)</h1>`
  )
);

// Middleware for Error Handling
app.use(errorMiddleware);

module.exports = app;

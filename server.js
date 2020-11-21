var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  cors = require("cors"),
  bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./backend/routes/routes");
routes(app);

app.listen(port);
console.log("API server started on: " + port);

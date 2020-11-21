"use strict";

var response = require("../utils/res");

exports.index = function (req, res) {
  response.ok("Hello from the Node JS RESTful side!", res);
};

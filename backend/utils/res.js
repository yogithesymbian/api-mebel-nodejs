"use strict";

exports.ok = function (values, res, msg, data) {
  var data = {
    success: true,
    message: msg,
    data,
  };
  res.json(data);
  res.end();
};

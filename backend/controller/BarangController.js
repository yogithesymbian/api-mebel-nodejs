"use strict";

var response = require("../utils/res");
var connection = require("../connection/conn");

exports.all = function (req, res) {
  connection.query("SELECT * FROM tbl_barang", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      const resData = {
        brg_all: rows,
      };
      response.ok(rows, res, "show semua barang", resData);
    }
  });
};

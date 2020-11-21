"use strict";

var response = require("../utils/res");
var connection = require("../connection/conn");

exports.in = function (req, res) {
  connection.query("SELECT * FROM tbl_beli_monitor_vw", function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      const resData = {
        brg_masuk: rows,
      };
      response.ok(rows, res, "show barang masuk", resData);
    }
  });
};

exports.readIn = function (req, res) {
  let data = {
    state_read: 1,
  };
  // console.log("body", req.body, " and this param", req.params);
  let sql =
    "UPDATE tbl_beli SET state_read='" +
    data.state_read +
    "' " +
    "WHERE id=" +
    req.body.id;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    response.ok(req, res, "read barang masuk", results);
  });
};

exports.out = function (req, res) {
  connection.query("SELECT * FROM tbl_jual_monitor_vw", function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      const resData = {
        brg_keluar: rows,
      };
      response.ok(rows, res, "show barang keluar", resData);
    }
  });
};

exports.readOut = function (req, res) {
  let data = {
    state_read: 1,
    id: req.body.id,
  };
  // console.log("body", req.body, " and this param", req.params);
  let sql =
    "UPDATE tbl_jual SET state_read='" +
    data.state_read +
    "' " +
    "WHERE id=" +
    data.id;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    response.ok(req, res, "read barang keluar", results);
  });
};

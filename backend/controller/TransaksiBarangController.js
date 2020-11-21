"use strict";

var response = require("../utils/res");
var connection = require("../connection/conn");

exports.beli = function (req, res) {
  let data = {
    kodebrg: req.body.kodebrg,
    qty: req.body.qty,
  };

  // total bayar calculation
  connection.query(
    "SELECT harga FROM tbl_barang WHERE kodebrg = ?", // get harga from kodbrg
    [data.kodebrg],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        var total = rows[0].harga * data.qty; // harga from kodebrg x qty
        data = {
          nofaktur: req.body.nofaktur,
          kodebrg: req.body.kodebrg,
          qty: req.body.qty,
          total_bayar: total,
        };
        const resData = {
          brg_beli: data,
        };

        // insert beli
        let sql = "INSERT INTO tbl_beli SET ?"; // insert data pembelian
        connection.query(sql, data, (err, results) => {
          if (err) throw err;
          console.log("data : ", data);
          response.ok(req, res, "transaksi barang", resData);
        });
        // end of insert beli
      }
    }
  );
  // total bayar calculation
};

exports.jual = function (req, res) {
  let data = {
    kodebrg: req.body.kodebrg,
    qty: req.body.qty,
  };
  // total bayar calculation
  connection.query(
    "SELECT harga FROM tbl_barang WHERE kodebrg = ?",
    [data.kodebrg],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        var total = rows[0].harga * data.qty;
        data = {
          nofaktur: req.body.nofaktur,
          kodebrg: req.body.kodebrg,
          qty: req.body.qty,
          total_bayar: total,
        };
        const resData = {
          brg_jual: data,
        };
        // insert beli
        let sql = "INSERT INTO tbl_jual SET ?";
        connection.query(sql, data, (err, results) => {
          if (err) throw err;
          console.log("data : ", data);
          response.ok(req, res, "transaksi barang", resData);
        });
        // end of insert beli
      }
    }
  );
  // total bayar calculation
};

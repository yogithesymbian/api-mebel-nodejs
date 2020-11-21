"use strict";

module.exports = function (app) {
  var todoList = require("../controller/controller");
  var barang = require("../controller/InOutBarangController");
  var getBarang = require("../controller/BarangController");
  var trBarang = require("../controller/TransaksiBarangController");

  // show
  app.route("/").get(todoList.index);

  app.route("/barang-all").get(getBarang.all);

  app.route("/barang-masuk").get(barang.in);
  app.route("/barang-masuk-read").post(barang.readIn);

  app.route("/barang-keluar").get(barang.out);
  app.route("/barang-keluar-read").post(barang.readOut);

  // insert
  app.route("/barang-input").post(trBarang.beli);
  app.route("/barang-output").post(trBarang.jual);
};

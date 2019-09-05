"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var request = require('request');

var cheerio = require('cheerio');

var url = 'https://twitter.com/_aoi_wasabi_';

var format = require('date-fns/format');

var today = format(new Date(), 'yyyy-MM-dd');
var titles_arr = [];

var fs = require('fs');

fs.readFile('wasabi_ypp_read.json', 'utf8', function (err, data) {
  if (data) {
    console.log(_typeof(data));
    titles_arr = JSON.parse(data);
    console.log(titles_arr[0].Twitter);
  } else {
    console.log('データがうまく読み込めません!');
  }
});
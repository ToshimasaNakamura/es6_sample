"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var request = require('request');

var cheerio = require('cheerio');

var url = 'https://twitter.com/_aoi_wasabi_';

var format = require('date-fns/format');

var today = format(new Date(), 'yyyy-MM-dd');
var titles_arr = [];

var fs = require('fs');

fs.readFile('.wasabi_ypp.json', 'utf8', function (err, data) {
  if (data) {
    console.log(_typeof(data));
    titles_arr = JSON.parse(data);
  } else {
    console.log('データがうまく読み込めません!');
  }
});

_axios["default"].get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCy5J11L_Gl0uxzOouLI8wpg&key=AIzaSyBij6yjwR8ZMsYtDVAKwlWJNRmaE2Mgtbc').then(function (response) {
  var subscriberCount = response.data.items[0].statistics.subscriberCount;
  request(url, function (e, response, body) {
    if (e) {
      console.error(e);
    }

    try {
      var $ = cheerio.load(body); //bodyの読み込み

      $('span.ProfileNav-value', 'li.ProfileNav-item.ProfileNav-item--followers').each(function (i, elem) {
        //'m_unit'クラス内のh3タグ内要素に対して処理実行
        //配列にタイトルを挿入していく
        titles_arr.push(_defineProperty({}, today, {
          "Twitter": subscriberCount,
          "Youtube": $(elem).text()
        }));
      });
      var json_text = JSON.stringify(titles_arr);
      console.log(json_text);
      fs.writeFile('.wasabi_ypp.json', json_text, function (err) {});
    } catch (e) {
      console.error(e);
    }
  });
});
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var request = require('request');

var cheerio = require('cheerio');

var url = 'https://twitter.com/_aoi_wasabi_';
var titles_arr = [];

var format = require('date-fns/format');

var today = format(new Date(), 'yyyy-MM-dd'); // 「fs」モジュールを読み込み、利用できるようにする

var fs = require('fs');

request(url, function (e, response, body) {
  if (e) {
    console.error(e);
  }

  try {
    var $ = cheerio.load(body); //bodyの読み込み

    $('span.ProfileNav-value', 'li.ProfileNav-item.ProfileNav-item--followers').each(function (i, elem) {
      //'m_unit'クラス内のh3タグ内要素に対して処理実行
      //配列にタイトルを挿入していく
      // 日付のモジュール（date-fns）を使って今日の日付を取得
      // titles_arr[today] = $(elem).text()        //配列にタイトルを挿入していく
      titles_arr.push(_defineProperty({}, today, $(elem).text())); // {
      //   "2019-09-04": 1165
      // }
    });
    console.log(titles_arr); // 配列（オブジェクト）→JSONテキスト

    var json_text = JSON.stringify(titles_arr);
    console.log(json_text); // twitter.jsonファイルにデータを書き込む

    fs.writeFile('./twitter.json', json_text, function (err) {});
  } catch (e) {
    console.error(e);
  }
});
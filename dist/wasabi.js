"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 「axios」モジュールを読み込み、利用できるようにする
var fs = require('fs'); //https://www2.yupiteru.co.jp/api/products はyupiteru製品の製品型番を取得できるAPI
//https://www2.yupiteru.co.jp/api/products にアクセスし、データを取得
//取得したデータをコンソールに出力


_axios["default"].get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCy5J11L_Gl0uxzOouLI8wpg&key=AIzaSyBij6yjwR8ZMsYtDVAKwlWJNRmaE2Mgtbc').then(function (response) {
  var subscriberCount = response.data.items[0].statistics.subscriberCount;
  console.log("チャンネル登録者数は" + subscriberCount + "です");
  fs.appendFile('./test.txt', "チャンネル登録者数は" + subscriberCount + "です", function (err) {});
});
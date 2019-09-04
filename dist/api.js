"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 「axios」モジュールを読み込み、利用できるようにする
//https://www2.yupiteru.co.jp/api/products はyupiteru製品の製品型番を取得できるAPI
//https://www2.yupiteru.co.jp/api/products にアクセスし、データを取得
//取得したデータをコンソールに出力
_axios["default"].get('https://www2.yupiteru.co.jp/api/products').then(function (response) {
  console.log(response.data);
});
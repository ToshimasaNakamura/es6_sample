// 「axios」モジュールを読み込み、利用できるようにする
import axios from 'axios';
const format = require('date-fns/format');
const today = format(new Date(),'yyyy-MM-dd');
const titles_arr = [];
const fs = require('fs');
 //https://www2.yupiteru.co.jp/api/products はyupiteru製品の製品型番を取得できるAPI
 //https://www2.yupiteru.co.jp/api/products にアクセスし、データを取得
 //取得したデータをコンソールに出力
axios.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCy5J11L_Gl0uxzOouLI8wpg&key=AIzaSyBij6yjwR8ZMsYtDVAKwlWJNRmaE2Mgtbc')
.then(function (response) {
  let subscriberCount = response.data.items[0].statistics.subscriberCount;
  console.log(subscriberCount);
  titles_arr.push({
    [today]: subscriberCount
  });

  var json_text = JSON.stringify(titles_arr);
  console.log(json_text);


  fs.writeFile('.youtube.json',json_text, function(err) {});
});

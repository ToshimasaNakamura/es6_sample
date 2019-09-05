import axios from 'axios';
const request = require('request')
const cheerio = require('cheerio')
const url = 'https://twitter.com/_aoi_wasabi_'
const format = require('date-fns/format');
const today = format(new Date(),'yyyy-MM-dd');
var titles_arr = [];

const fs = require('fs');

fs.readFile('.wasabi_ypp.json', 'utf8', function(err, data) {
  if (data) {
    console.log(typeof data);
    titles_arr = JSON.parse(data);
  }else{
    console.log('データがうまく読み込めません!');
  }
})


axios.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCy5J11L_Gl0uxzOouLI8wpg&key=AIzaSyBij6yjwR8ZMsYtDVAKwlWJNRmaE2Mgtbc')
.then(function (response) {
  let subscriberCount = response.data.items[0].statistics.subscriberCount;

request(url, (e, response, body) => {
      if (e) {
          console.error(e)
      }
      try {
          const $ = cheerio.load(body)              //bodyの読み込み
          $('span.ProfileNav-value','li.ProfileNav-item.ProfileNav-item--followers').each((i, elem) => {   //'m_unit'クラス内のh3タグ内要素に対して処理実行
                      //配列にタイトルを挿入していく

  titles_arr.push({
    [today]: {"Twitter":subscriberCount,"Youtube":$(elem).text()}
  });
})
  var json_text = JSON.stringify(titles_arr);
  console.log(json_text);

  fs.writeFile('.wasabi_ypp.json',json_text, function(err) {});
} catch (e) {
    console.error(e)
}
})
});

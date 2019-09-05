const request = require('request')
const cheerio = require('cheerio')
const url = 'https://twitter.com/_aoi_wasabi_'
const titles_arr = [];
const format = require('date-fns/format');
const today = format(new Date(),'yyyy-MM-dd');
// 「fs」モジュールを読み込み、利用できるようにする
const fs = require('fs');


request(url, (e, response, body) => {
    if (e) {
        console.error(e)
    }
    try {
        const $ = cheerio.load(body)              //bodyの読み込み
        $('span.ProfileNav-value','li.ProfileNav-item.ProfileNav-item--followers').each((i, elem) => {   //'m_unit'クラス内のh3タグ内要素に対して処理実行
                    //配列にタイトルを挿入していく

            // 日付のモジュール（date-fns）を使って今日の日付を取得
            // titles_arr[today] = $(elem).text()        //配列にタイトルを挿入していく
            titles_arr.push({
              [today]: $(elem).text()
            });
            // {
            //   "2019-09-04": 1165
            // }
        })
        console.log(titles_arr)
        // 配列（オブジェクト）→JSONテキスト
        var json_text = JSON.stringify(titles_arr);
        console.log(json_text);
        // twitter.jsonファイルにデータを書き込む
        fs.writeFile('./twitter.json', json_text, function(err) {});
     } catch (e) {
         console.error(e)
     }
})

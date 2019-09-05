// 「fs」モジュールを読み込み、利用できるようにする
const fs = require('fs');

// test.txtファイルを読み込み、ファイルの中身をコンソールに出力
fs.readFile('./test.txt', 'utf8', function(err, data) {
  if (data) {
    console.log(data);
  }else{
    console.log('データがうまく読み込めません!');
  }
})
// test.txtファイルにデータを書き込む
fs.appendFile('./test.txt',date , function(err) {});

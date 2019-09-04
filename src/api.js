// 「axios」モジュールを読み込み、利用できるようにする
import axios from 'axios';
 //https://www2.yupiteru.co.jp/api/products はyupiteru製品の製品型番を取得できるAPI
 //https://www2.yupiteru.co.jp/api/products にアクセスし、データを取得
 //取得したデータをコンソールに出力
axios.get('https://www2.yupiteru.co.jp/api/products').then(function (response) {
  console.log(response.data);
});

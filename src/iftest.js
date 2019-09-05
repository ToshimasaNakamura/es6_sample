import axios from 'axios';
const request = require('request')
const cheerio = require('cheerio')
const url = 'https://twitter.com/_aoi_wasabi_'
const format = require('date-fns/format');
const today = format(new Date(),'yyyy-MM-dd');
var titles_arr = [];

const fs = require('fs');

fs.readFile('wasabi_ypp_read.json', 'utf8', function(err, data) {
  if (data) {
    console.log(typeof data);

    titles_arr = JSON.parse(data);
    console.log(titles_arr[0].Twitter);
  }else{
    console.log('データがうまく読み込めません!');
  }
})

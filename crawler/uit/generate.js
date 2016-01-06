'use strict';

var _ = require('lodash');
var fs = require('fs');

var data = require('./uit_sample.json');

var parser = require('../../lib').Parser;
var util = require('../../lib').util;

var data_result = [];

for (var i in data) {
  var row = {
    'first_name': '',
    'last_name': '',
    'full_name': '',
    'last_name_group': '',
    'gender': ''
  };
  var p = parser(data[i].name);
  //console.log();
  data_result.push(_.merge(row, p));
}

fs.writeFile("./data/json/data.json", JSON.stringify(data_result, null, 4), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

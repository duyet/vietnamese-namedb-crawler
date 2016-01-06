var Parser = require('../lib').Parser

var testList = [
  'Duyet',
  'duyet',
  'Van Duyet',
  'Le Van Duyet',
  'Nguyen Hoang Vinh Nghi',
  'Ton Tang Ton Nu Thi Le Chi'
]

for (var i in testList) {
  console.log(testList[i], ' ==> ', Parser(testList[i]), '\n\n')
}

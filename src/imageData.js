const fs = require('fs')

const imageData = fs.readFileSync('./imageData.txt', {encoding:'utf8'})


const nestedImageArr = imageData.split('\n')

let strTest = nestedImageArr[0].split(', ')
console.log(nestedImageArr);


const csvFilePath='customer-data.csv'
const csv=require('csvtojson')
var fs = require('fs');
var stream = fs.createWriteStream('customer-data.json');
var jsonObj=''
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
  fs.appendFile('customer-data.json', JSON.stringify(jsonObj,null,2), function (err) {
  if (err) throw err;
  })

  fs.appendFile('customer-data.json', ',\n', function (err) {
  if (err) throw err;
  })
})
.on('done',(error)=>{
  //console.log(error)

if(error) throw error;
})

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('G20.csv')
});

var header=[];
var isHeader=true;

rl.on('line', function(line) {
 var lineRecords= line.trim().split(',');
 //console.log(lineRecords[0]);

 for(var i=0;i<lineRecords.length;i++){

          header[i]=lineRecords[i].split("\"")[1];


  }
   console.log(header);











 });











/*	var globe=[];
var cout=[];
var final=[];
var arr2=[];

rl.on('line',function(chunk)
{
var arr2=chunk.split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
var arr3=arr2[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

for(let ab of arr2)
{
globe.push(ab);
}

globe.shift();

console.log(arr3);
console.log(globe);
globe.shift();

for(let value of globe)
{
cout=let.split(",");

final.push({"Country":cout[0],"Population":cout[5],"GDP":cout[9],"Purchasing Power":cout[13]});

}
console.log(final);
});
*/

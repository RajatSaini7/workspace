var fs = require("fs");

var chunk = fs.readFileSync('G20.csv','utf-8');



var lines=chunk.split("\n");
var head=lines[0].split(",");
//console.log(head);
//console.log(head);

var final=[];

/*for(var i=1;i<lines.length;i++){

head.hasOwnProperty("");

}
*/

for(var i=1;i<lines.length-2;i++)
{
  var obj={};
  var current=lines[i].split(",");


  for(var j=0;j<head.length;j++)
  {
    if(head[j]=='"Country Name"'||head[j]=='"Population (Millions) - 2013"'|| head[j]=='"GDP Billions (US$) - 2013"'||head[j]=='"Purchasing Power in Billions ( Current International Dollar) - 2013"')
    {
      //console.log(head[j]);
      //console.log(current[j]);
       obj[head[j]]=current[j];
    // obj={head[j]:current[j]};
    }
  }
  //console.log({});
//  console.log(obj);
  //break;
  final.push(obj);
}

console.log(final);

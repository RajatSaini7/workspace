const readline = require('readline');
const fs = require('fs');

var header =[];
var jsonData=[];

var tempData1 = {};
var tempData2 = {};
var tempData3 = {};
var tempData4 = {};
var tempData5 = {};
var tempData6 = {};

var isHeader=true;

var index_country;
var index_population2013;
var index_gdp2013;

/*header[0]="Asia";
header[1]="Europe";
header[2]="Africa";
header[3]="America";
header[4]="Australia";*/
var sum_Asia=0;
var sum_Europe=0;
var sum_Africa=0;
var sum_NorthAmerica=0;
var sum_SouthAmerica=0;
var sum_Australia=0;

var sum_Asia1=0;
var sum_Europe1=0;
var sum_Africa1=0;
var sum_NorthAmerica1=0;
var sum_SouthAmerica1=0;
var sum_Australia1=0;
var flag=0;
const rl = readline.createInterface({
  input: fs.createReadStream('G20.csv')
});
rl.on('line', function(line) {
  console.log(tempData1);
  var lineRecords= line.trim().split(',');;
  // for(var i=0;i<lineRecords.length;i++){
  if(isHeader)
  {
    index_country=lineRecords.indexOf("\"Country Name\"");

    index_population2013=lineRecords.indexOf("\"Population (Millions) - 2013\"");

    index_gdp2013=lineRecords.indexOf("\"GDP Billions (US$) - 2013\"");
  }

  else /*if(i==index_population)*/
  {
    if(lineRecords[index_country]==('"Japan"') || lineRecords[index_country]=="\"Saudi Arabia\"" || lineRecords[index_country]=="\"Republic of Korea\"" || lineRecords[index_country]=="\"India\"" || lineRecords[index_country]=="\"Russia\"" || lineRecords[index_country]=="\"Indonesia\"" || lineRecords[index_country]=="\"Turkey\"" || lineRecords[index_country]=="\"China\"")
    {
      sum_Asia = sum_Asia + parseFloat(lineRecords[index_population2013].split("\"")[1]);
      sum_Asia1 = sum_Asia1+parseFloat(lineRecords[index_gdp2013].split("\"")[1]);
      //          tempData[header[0]]=sum_Asia;
    }

    if(lineRecords[index_country]==("\"United Kingdom\"") || lineRecords[index_country]=="\"Italy\"" || lineRecords[index_country]=="\"Germany\"" || lineRecords[index_country]=="\"France\"")
    {
      sum_Europe= sum_Europe + parseFloat(lineRecords[index_population2013].split("\"")[1]);
      sum_Europe1 = sum_Europe1+parseFloat(lineRecords[index_gdp2013].split("\"")[1]);
      //          tempData[header[1]]=sum_Europe;

    }

    if(lineRecords[index_country]==("\"South Africa\""))
    {
      sum_Africa= sum_Africa + parseFloat(lineRecords[index_population2013].split("\"")[1]);
      sum_Africa1 = sum_Africa1 + parseFloat(lineRecords[index_gdp2013].split("\"")[1]);
      //          tempData[header[2]]=sum_Africa;
    }


    if(lineRecords[index_country]=="\"Canada\"" || lineRecords[index_country]=="\"Mexico\"" || lineRecords[index_country]=="\"USA\"")
    {
      sum_NorthAmerica= sum_NorthAmerica + parseFloat(lineRecords[index_population2013].split("\"")[1]);
      sum_NorthAmerica1 = sum_NorthAmerica1 + parseFloat(lineRecords[index_gdp2013].split("\"")[1]);
      //          tempData[header[2]]=sum_Africa;
    }

    if(lineRecords[index_country]==("\"Brazil\"") || lineRecords[index_country]=="\"Argentina\"")
    {
      sum_SouthAmerica= sum_SouthAmerica + parseFloat(lineRecords[index_population2013].split("\"")[1]);
      sum_SouthAmerica1 = sum_SouthAmerica1 + parseFloat(lineRecords[index_gdp2013].split("\"")[1]);
      //          tempData[header[2]]=sum_Africa;
    }

    if(lineRecords[index_country]==("\"Australia\""))
    {
      sum_Australia= sum_Australia+parseFloat(lineRecords[index_population2013].split("\"")[1]);
      sum_Australia1 = sum_Australia1+parseFloat(lineRecords[index_gdp2013].split("\"")[1]);
      //          tempData[header[2]]=sum_Africa;
    }



    flag=1;

  }

  /*
  tempData={};*/
  // }

  if(flag==1)
  {
    var result=[];

    tempData1["continent"]="Asia";
    tempData2["continent"]="Africa";
    tempData3["continent"]="NorthAmerica";
    tempData4["continent"]="SouthAmerica";
    tempData5["continent"]="Europe";
    tempData6["continent"]="Australia";

    tempData1["Population"]=sum_Asia;
    tempData2["Population"]=sum_Africa;
    tempData3["Population"]=sum_NorthAmerica;
    tempData4["Population"]=sum_SouthAmerica;
    tempData5["Population"]=sum_Europe;
    tempData6["Population"]=sum_Australia;

    tempData1["GDP"]=sum_Asia1;
    tempData2["GDP"]=sum_Africa1;
    tempData3["GDP"]=sum_NorthAmerica1;
    tempData4["GDP"]=sum_SouthAmerica1;
    tempData5["GDP"]=sum_Europe1;
    tempData6["GDP"]=sum_Australia1;


    result.push(tempData1);
    result.push(tempData2);
    result.push(tempData3);
    result.push(tempData4);
    result.push(tempData5);
    result.push(tempData6);
  }//end of flag

  jsonData=result;
  fs.writeFileSync("data3.json",JSON.stringify(jsonData),encoding="utf8");

  tempData1={};
  tempData2={};
  tempData3={};
  tempData4={};
  tempData5={};
  tempData6={};
  isHeader=false;
  flag=0;
 });

const readline = require('readline');
const fs = require('fs');
var header =[];
var jsonData=[];
var tempData={};
var isHeader=true;
const rl = readline.createInterface({
	input: fs.createReadStream('G20.csv')
});

var index_countryName;
var index_power;
var index_power2;
var index_power3;
rl.on('line', function(line) {
	var lineRecords= line.trim().split(',');
  //console.log(lineRecords[0]);
	for(var i=0;i<lineRecords.length;i++){

		if(isHeader)
		{
			if(lineRecords[i] == "\"Country Name\"")
			{
				index_countryName = i;

				header[0]=lineRecords[i].split("\"")[1];
      //  console.log(header[0]);
			}
			if(lineRecords[i]=="\"Purchasing Power in Billions ( Current International Dollar) - 2013\"")
			{
				index_power = i;
				header[1]=lineRecords[i].split("\"")[1];
        //console.log(header);
			}
      if(lineRecords[i]=="\"Population (Millions) - 2013\"")
			{
				index_power2 = i;
				header[2]=lineRecords[i].split("\"")[1];
        //console.log(header);
			}
      if(lineRecords[i]=="\"GDP Billions (US$) - 2013\"")
			{
				index_power3 = i;
				header[3]=lineRecords[i].split("\"")[1];
        //console.log(header);
			}
		}
		else if(!(lineRecords[header.indexOf('Country Name')].split("\"")[1]=="European Union"))
		{
			if(i==index_countryName)
			{
				tempData[header[0]]=lineRecords[i].split("\"")[1];

			}

			if(i==index_power)
			{
				tempData[header[1]]=lineRecords[i].split("\"")[1];

			}
      if(i==index_power2)
			{
				tempData[header[2]]=lineRecords[i].split("\"")[1];

			}
      if(i==index_power3)
			{
				tempData[header[3]]=lineRecords[i].split("\"")[1];

			}

		}

	}
//  console.log(header);
 // console.log(index_countryName);
 if(!(Object.getOwnPropertyNames(tempData).length === 0))
 {
 jsonData.push(tempData);
}
 tempData={};

 isHeader=false;
 console.log(jsonData);
});

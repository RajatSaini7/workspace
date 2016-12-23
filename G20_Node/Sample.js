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
var index_population;
var index_gdp;
var index_purchasingpower;

rl.on('line', function(line) {
	var lineRecords= line.trim().split(',');
	for(var i=0;i<lineRecords.length;i++){
		if(isHeader)
		{
			if(lineRecords[i] == "\"Country Name\"")
			{
				index_countryName = i;

				header[0]=lineRecords[i].split("\"")[1];

			}

			if(lineRecords[i]=="\"Population (Millions) - 2013\"")
			{
				index_population = i;
				header[1]=lineRecords[i].split("\"")[1];
			}

			if(lineRecords[i] == "\"GDP Billions (US$) - 2013\"")
			{
				index_gdp = i;

				header[2]=lineRecords[i].split("\"")[1];

			}

			if(lineRecords[i] == "\"Purchasing Power in Billions ( Current International Dollar) - 2013\"")
			{
				index_purchasingpower = i;

				header[3]=lineRecords[i].split("\"")[1];

			}

		}
		else  if(!(lineRecords[header.indexOf('Country Name')].split("\"")[1]=="European Union"))
		{

			if(i==index_countryName)
			{
				tempData[header[0]]=lineRecords[i].split("\"")[1];

			}

			if(i==index_population)
			{
				tempData[header[1]]=lineRecords[i].split("\"")[1];

			}

			if(i==index_gdp)
			{
				tempData[header[2]]=lineRecords[i].split("\"")[1];

			}

			if(i==index_purchasingpower)
			{
				tempData[header[3]]=lineRecords[i].split("\"")[1];

			}


		}
	}
	// console.log(index_countryName);
	if(!(Object.getOwnPropertyNames(tempData).length == 0))
	{
		jsonData.push(tempData);
	}

	tempData={};

	isHeader=false;

	fs.writeFileSync("data2.json",JSON.stringify(jsonData),encoding="utf8");
});

var express=require('express');
var app=express();

app.get('/',function(request,response)
{
response.send("Hello from express");
})

app.post('/',function(request,response)
{
response.send("Bye from express");
})

app.delete('/',function(request,response)
{
response.send("Deleted");
})

app.put('/',function(request,response)
{
response.send("Express put");
})

app.listen('8080',function(err)
{
  if(err)
  {
    console.log("Error occurred....");
  }
  else {
    console.log("Server started....");
  }
})

var express=new require("express");
var app=express();

app.get('/',function(req,res){
    res.send('{"response":"hello devops"}');
});
app.get('/will',function(res,res){
    res.send('{"response":"hello world"}');
});
app.get('/ready',function(req,res){
    res.send('{"respond":"hello it is working"}');
});
app.listen(3000);
module.exports=app;

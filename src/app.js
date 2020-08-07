//引入express包
var express = require('express');
//创建app对象
var app = express();

//app的get请求格式
app.get("/",function(req,res){
    res.send("hello world!!!");
    console.log("服务器响应get请求!!!" );
});

//监听端口
app.listen(3000);

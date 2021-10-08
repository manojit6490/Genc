const express=require("express");
const bodyParser=require("body-parser");
var app=express();
var msg;
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.get('/',function(req,res){
res.sendfile(__dirname+"/index.html");
});
app.post("/result",function(req,res){
  var name=req.body.username;
  var ten=parseInt(req.body.ten);
  var twe=parseInt(req.body.twelve);
  var gpa=parseInt(req.body.gpa);

  res.render('check',{user:name,tenth:ten,twelveth:twe,gpam:gpa});
});
app.listen(3000,function(){
  console.log("server started @ port 3000");
});

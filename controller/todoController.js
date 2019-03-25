// 引入mongoose模块
var mongoose = require("mongoose");

mongoConnectURL = "mongodb+srv://yanggui:960515mongodb@googlelowa-z3tde.gcp.mongodb.net/test?retryWrites=true";
// 链接数据库
mongoose.connect(mongoConnectURL,{useNewUrlParser: true});

// 创建图表
var todoSchema = new mongoose.Schema({
    item:String
});

// 往数据库中存储数据
var Todo = mongoose.model("Todo",todoSchema);
// Todo({item:"Hello Everyone"}).save(function(err,data){
//     if (err) throw err;
//     console.log("Item saved");
// });

var bodyParser = require("body-parser");
// 对数据进行解析
var urlencoderParser = bodyParser.urlencoded({extended:false});

// var data = [
//     {item: "欢迎大家来到双核浏览器！"},
//     {item: "双核浏览器极速体验"},
//     {item: "主要是双核极速"}
// ]

module.exports = function (app) {
    // 获取数据
    app.get("/todo", function(req,res) {
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render("todo",{todos:data});
            console.log("IP: "+req.ip+" 请求数据 >>>");
        }).sort({"_id":-1});
    })

    // 传递数据
    app.post("/todo",urlencoderParser,function(req,res) {
        Todo(req.body).save(function(err,data){
            if(err){
                throw err;
            } else {
                console.log("IP: "+req.ip+" 插入数据: "+data.item);
                res.json(data);
            }
        });
    });

    // 删除数据
    app.delete("/todo/:item",function(req,res) {
        // console.log(req.params.item);
        Todo.find({item:req.params.item}).deleteOne(function(err,data){
            if(err) {
                throw err;
            } else {
                console.log("IP: "+req.ip+" 删除数据");
                res.json(data);
            }
        });

        // 数组操作
        // data = data.filter(function(todo){
        //     return req.params.item !== todo.item;
        // });
        
        // res.json(data);
    });
}
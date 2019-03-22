var bodyParser = require("body-parser");
// 对数据进行解析
var urlencoderParser = bodyP

var data = [
    {item: "欢迎大家来到双核浏览器！"},
    {item: "双核浏览器极速体验"},
    {item: "主要是双核极速"}
]

module.exports = function (app) {
    // 获取数据
    app.get("/todo", function(req,res) {
        res.render("todo",{todos:data});
    })

    // 传递数据
    app.post("/todo",function(req,res) {
        // coding...
    });

    // 删除数据
    app.delete("/todo",function(req,res) {
        // coding...
    });
}
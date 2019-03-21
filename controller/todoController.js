module.exports = function (app) {
    // 获取数据
    app.get("/todo", function(req,res) {
        res.send("您所访问的页面地址是: "+req.url);
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
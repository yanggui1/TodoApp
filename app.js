var express = require("express");

// 自定义模块todoController
var todoController = require("./controller/todoController");
var app = express();

app.set("view engine","ejs");

app.use("/public",express.static("public"));

todoController(app);

app.listen(3000);
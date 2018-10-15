var express = require('express');
var app = express();
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var profile = require("./routes/profile");
var post = require("./routes/post");
var discussions = require("./routes/discussions");

app.set("views", path.join(__dirname, "app", "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use(profile);
app.use("/post/:title", post);
app.use("/", discussions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, process.env.IP, function () {
  console.log("server started");
});

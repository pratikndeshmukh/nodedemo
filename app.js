var express = require("express");
const bodyParser = require("body-parser");
const url = require("url");
const querystring = require("querystring");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "content-type,x-request-application,x-otp,sid "
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,OPTION,PATCH"
  );
  next();
});

var routes = require("./routes/routes.js")(app);

var server = app.listen(3333, function() {
  console.log("Listening on port %s...", server.address().port);
});

var express = require("express");
var path = require("path");
var port = process.env.PORT || 3000;
var app = express();
app.get("/", function (req, res) {
 res.sendFile(path.join(__dirname, '/index.html'));
});
app.get("/docs", function (req, res) {
 res.sendFile(path.join(__dirname, '/docs/index.html'));
});
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/assets', express.static(path.join(__dirname, '/docs/assets')));
app.use('/search', express.static(path.join(__dirname, '/docs/search')));
app.listen(port, function () {});
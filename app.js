var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"));
app.get('/topic/:id', function(req, res) {
    var topics = [
        'Javascript is....',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
    <a href="/topic/0">JavaScript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br><br>
    ${topics[req.params.id]}
    `
    res.send(output);
})
app.get("/form_receiver", function(req, res) {
    var title = req.query.title;
    var description = req.query.description;
    res.send(title + '' + description)
})
app.get("/form", function(req, res) {
    res.render('form');
})
app.get('/topic/:id/:mode', function(req, res) {
    res.send(req.params.id + ',' + req.params.mode)
})
app.get("/template", function(req, res) {
    res.render('temp', { time: Date(), title: 'pug' });
})
app.get("/", function(req, res) {
    res.send("Hello home page");
})
app.get("/route", function(req, res) {
    res.send('hello router, <img src = "/smallcheck.png"> ');
})
app.get("/dynamic", function(req, res) {
    var time = Date();
    var output = `
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset = "utf-8">
                <title></title>
            </head>
            <body>
                Hello, Dynamic!
                ${time}
            </body>
    <html>`;
    res.send(output);
})
app.get("/login", function(req, res) {
    res.send("login please")
})
app.listen(3000, function() {
    console.log("connted 80 port!");
}); // 웹 포트 넘버
var express = require('express');
var app = express();

app.get('/lunch/', function(req, res) {
    res.send('Hello World!')
});

app.listen(80);
console.log('Listening on port 80');
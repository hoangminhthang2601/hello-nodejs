var express = require('express');
var app = express();
app.get('/', function(req, res) {   res.send('hello node'); });
app.listen(3000,function() {  console.log('example listening on port 3000'); });

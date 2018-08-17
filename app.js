var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Financial Times');
});

app.listen(3000, function() {
  console.log('ready on port 3000');
});

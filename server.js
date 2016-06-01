var express = require('express'),
    http = require('http'),
    path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, './')));
app.use(express.static(path.join(__dirname, '../')));
http.createServer(app).listen(4000, function() {
  console.log('Express server listening on port ' + 4000);
});

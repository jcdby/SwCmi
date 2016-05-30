var express = require('express');
var app = express();

app.use(express.static('src/public'));
app.use(express.static('./'));

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

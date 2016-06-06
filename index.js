var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('src/public'));
app.use(express.static('./'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'src/public', 'index.html'))
});


app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});

var express = require('express');
var app = express();
var path = require('path');
var rootDir = require('./util/get-root-dir')();


app.use('/', express.static(path.join(rootDir, 'src', 'public')));

//app.use(express.static('src/public'));
app.use(express.static('./')); // what is this code for ?? @TODO

app.get('*', function (request, response){
    //response.sendFile(path.resolve(__dirname, 'src/public', 'index.html'))
    response.sendFile(path.resolve(path.join(rootDir, 'src', 'public'), 'index.html'))
});


app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});

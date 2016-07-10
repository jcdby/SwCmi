var express = require('express');
var app = express();
var path = require('path');
var rootDir = require('./util/get-root-dir')();

var forumAPI = require('./routes/forumAPI');
var oldForumAPI = require('./routes/oldForumAPI');

// to parse requests
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(rootDir, 'public')));
app.use(express.static('./')); // what is this code for ?? @TODO

// -------- APIs
app.use('/api/forum', forumAPI);
app.use('/api/old_forum', oldForumAPI);
// -------------- end Forum API

app.get('*', function (request, response) {
    console.log('Request: [GET]', request.originalUrl);
    response.sendFile(path.resolve(path.join(rootDir, 'public'), 'index.html'))
});

app.listen(3002, function () {
    console.log('Example app listening on port 3002!');
});

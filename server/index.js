var express = require('express');
var app = express();
var path = require('path');


// --------- all writing about API can be moved to API server,
// after I understand how to use it. @francois
var rootDir = require('./util/get-root-dir')();
var fs = require('fs');

// to parse requests

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var FORUM_FILE = path.join(__dirname, 'forum.json');
console.log("FORUM_FILE " + FORUM_FILE);



app.use('/', express.static(path.join(rootDir, 'public')));

//app.use(express.static('src/public'));
app.use(express.static('./')); // what is this code for ?? @TODO


// -------------- beginning Forum API


app.get('/api/old_forum', function (req, res) {
    console.log("get /api/old_forum");

    fs.readFile(FORUM_FILE, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});

app.get('/api/old_forum/:id', function (req, res) {
    var forum_id = req.params.id;
    console.log("get /api/old_forum/:id with ID = " + forum_id);

    fs.readFile(FORUM_FILE, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var forum_topic = getById(forum_id, data)[0];
        console.log('(stringified) forum_topic: \n' + JSON.stringify(forum_topic));
        res.json(forum_topic);
    });
});

app.post('/api/old_forum/:id', function (req, res) {
    var forum_id = req.params.id;
    console.log("post /api/old_forum/:id with ID = " + forum_id);

    var author = req.body.author;
    var title = req.body.title;
    var content = req.body.content;

    // Date.now() for simple ID
    var new_post = {
        "post_id": Date.now(),
        "title": title,
        "author": author,
        "content": content
    };

    console.log("new_post added: " + JSON.stringify(new_post));

    fs.readFile(FORUM_FILE, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var forum_topic = getById(forum_id, data)[0];
        forum_topic.posts_list.push(new_post);

        var forums_array = add_Post_ForumById(new_post, data, forum_id);

        // rewrite the whole JSON file to update the changes
        fs.writeFile(FORUM_FILE, JSON.stringify(forums_array), function (err, data) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            // send back just the topic
            res.json(forum_topic);
        });
    });

});


function getById(id, data) {
    var js_array = JSON.parse(data);
    return js_array.filter(
        function (data) {
            return data.id == id
        }
    );
}

function add_Post_ForumById(new_post, data, forum_id) {
    var forums_array = JSON.parse(data);
    forums_array.filter(
        function (data) {
            if (data.id == forum_id) {
                data.posts_list.push(new_post);
            }
        }
    );
    return forums_array;
}


// -------------- end Forum API


app.get('*', function (request, response) {
    console.log('Request: [GET]', request.originalUrl);

    //response.sendFile(path.resolve(__dirname, 'src/public', 'index.html'))
    response.sendFile(path.resolve(path.join(rootDir, 'public'), 'index.html'))
});


app.listen(3002, function () {
    console.log('Example app listening on port 3002!');
});

/**
 * Created by fwavresky on 7/7/2016.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var FORUM_LIST_FILE = path.join(__dirname, '..', 'data', 'forumList.json');
console.log("FORUM_LIST_FILE " + FORUM_LIST_FILE);

var FORUM_FILE = path.join(__dirname, '..', 'data', 'forum.json');
console.log("FORUM_FILE " + FORUM_FILE);

var TOPIC_FILE = path.join(__dirname, '..', 'data', 'topic.json');
console.log("TOPIC_FILE " + TOPIC_FILE);


router.get('/forumList', function (req, res) {
    console.log("get /forumList");
    fs.readFile(FORUM_LIST_FILE, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});

router.get('/:forumState', function (req, res) {
    var forum_state = req.params.forumState;
    console.log("get /:forumState with forumState = " + forum_state);

    fs.readFile(FORUM_FILE, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var forum = getById(forum_state, data)[0];
        console.log('(stringified) forum: \n' + JSON.stringify(forum));
        res.json(forum);
    });
});

function getById(state, data) {
    var js_array = JSON.parse(data);
    return js_array.filter(
        function (data) {
            return data.state == state
        }
    );
}

module.exports = router;

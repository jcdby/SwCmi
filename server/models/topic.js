/**
 * Created by fwavresky on 7/7/2016.
 */
import mongoose from 'mongoose'
import database from './../Database//database'

var Schema = mongoose.Schema;

var TopicSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    forum_id: mongoose.Schema.Types.ObjectId,
    state: String,
    title: String,
    author: String,
    description: String,
    active: {type: Date},
    post_list: [
        {
            post_id: mongoose.Schema.Types.ObjectId,
            title: String,
            author: String,
            content: String
        }
    ]
});

// db - schema - collection name
var Topic = database.getDB().model('our_db', TopicSchema, 'topic');

module.exports = Topic;
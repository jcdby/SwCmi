/**
 * Created by fwavresky on 7/7/2016.
 */
import mongoose from 'mongoose'
import database from './../Database//database'

var Schema = mongoose.Schema;

var ForumListSchema = new Schema({
        forumList: [
            {
                state: String,
                title: String,
                subtitle: String,
                author: String,
                description: String,
                active: {type: Date},
                topic_list: [Schema.Types.ObjectId]
            }
        ]
    })
    ;

// db - schema - collection name
var ForumList = database.getDB().model('our_db', ForumListSchema, 'forumList');

module.exports = ForumList;
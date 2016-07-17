/**
 * Created by fwavresky on 7/7/2016.
 */
import mongoose from 'mongoose'
import database from './../Database//database'

var Schema = mongoose.Schema;

var ForumsCollectionSchema = new Schema({
    state: String,
    title: String,
    subtitle: String,
    author: String,
    description: String,
    creation_date: {type: Date},
    topics_list: [
        {
            state: String,
            title: String,
            author: String,
            description: String,
            creation_date: {type: Date},
            posts_list: [
                {
                    title: String,
                    author: String,
                    content: String,
                    creation_date: {type: Date}
                }
            ]
        }
    ]
});

// db - schema - collection name
var ForumsCollection = database.getDB().model('our_db', ForumsCollectionSchema, 'forumsCollection');

module.exports = ForumsCollection;
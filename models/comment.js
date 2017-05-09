const mongoose = require('mongoose');
const User = require('./user');
const Post = require('./post');

var Schema = mongoose.Schema;

var commentSchema = mongoose.Schema({
	text: {
		type: String,
		required: true
	},
	post: {
		type: Schema.ObjectId, 
		ref: 'Post'
	},
	author: {
		type: Schema.ObjectId, 
		ref: 'User'
	},
	date: {
		type: String,
		default: Date.now
	}	
});

var Comment = module.exports = mongoose.model('Comment', commentSchema);



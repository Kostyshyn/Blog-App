const mongoose = require('mongoose');
const Post = require('./post');

var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	role: {
		type: Number,
		default: 0
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	info: {
		type: String
	},
	profile_img: {
		type: String,
		default: ' '
	},
	online: {
		type: Boolean,
		default: false
	},
	href: {
		type: String,
		unique: true,
		trim: true,
	},
	posts: [{
		type: Schema.ObjectId,
		ref: 'Post'
	}],
	likes: [{
		type: Schema.ObjectId,
		ref: 'Like'
	}]
});

userSchema.pre('save', function(next){
	this.href = this.username.toLowerCase();
	next();
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.addUser = function(user){
	return new Promise(function(resolve, reject){
		User.create(user, function(err, user){
			if (err){
				reject(err);
			} else {
				resolve(user);
			}
		});		
	});
};

module.exports.getUser = function(query){
	return new Promise(function(resolve, reject){
		User.findOne(query, function(err, user){
			if (err){
				reject(err);
			} else {
				resolve(user);
			}
		});	
	});
};

module.exports.getUserPosts = function(query){
	return new Promise(function(resolve, reject){
		User.findOne(query).populate('posts').exec(function(err, user){
			if (err){
				reject(err);
			} else {
				resolve(user);
			}
		});	
	});
};


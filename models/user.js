const mongoose = require('mongoose');
const Post = require('./post');

const moment = require('moment');

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
	}],
	comments: [{
		type: Schema.ObjectId,
		ref: 'Comment'
	}],
	created: {
		type: Date,
		default: Date.now
	}
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

module.exports.getUser = function(id){
	return new Promise(function(resolve, reject){
		var query = { _id: id };
		User.findOne(query, function(err, user){
			if (err){
				reject(err);
			} else {
				resolve(user);
			}
		});	
	});
};

module.exports.editUser = function(id, user, options){
	return new Promise(function(resolve, reject){
		var query = { _id: id };
		User.findOneAndUpdate(query, user, options, function(err, user){
			if (err){
				reject(err);
			} else {
				resolve(user);
			}
		});	
	});
};

module.exports.logout = function(id){
	return new Promise(function(resolve, reject){
		var query = { _id: id };
		var update = { online: false };
		User.findOneAndUpdate(query, update, {}, function(err, user){
			if (err){
				reject(err);
			} else {
				resolve(user);
			}
		});		
	});
};

// module.exports.login = function(id){
// 	return new Promise(function(resolve, reject){
// 		var query = { _id: id };
// 		var update = { online: true };
// 		User.findOneAndUpdate(query, update, {}, function(err, user){
// 			if (err){
// 				reject(err);
// 			} else {
// 				resolve(user);
// 			}
// 		});		
// 	});
// };

module.exports.deleteUser = function(user){
	var query = { _id: user };
	return new Promise(function(resolve, reject){
		User.findOneAndRemove(query, function(err, user){
			if (err){
				reject(err);
			} else {
				mongoose.model('Post').find({ author: user.id }).remove(function(err, post){
					if (err){
						reject(err);
					} else {
						resolve(user);
					}
				});
			}
		});	
	});
};

module.exports.getUserPosts = function(user){
	return new Promise(function(resolve, reject){
		var query = { username: user };
		User.findOne(query).populate('posts').exec(function(err, user){
			if (err){
				reject(err);
			} else {
				resolve(user);
			}
		});	
	});
};


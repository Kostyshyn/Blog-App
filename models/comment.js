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
		type: Date,
		default: Date.now
	}	
});

var Comment = module.exports = mongoose.model('Comment', commentSchema);

module.exports.addComment = function(href, user, text){
	return new Promise(function(resolve, reject){
		var query = { href: href };
		mongoose.model('Post').findOne(query, function(err, post){
			if (err){
				reject(err);
			} else {
				var query = { _id: user };
				mongoose.model('User').findOne(query, function(err, user){
					if (err){
						reject(err);
					} else {
						var comment = {
							text: text,
							author: user._id,
							post: post._id,
							date: Date.now()
						};
						Comment.create(comment, function(err, comment){
							if (err){
								reject(err);
							} else {
								post.comments.push(comment);
								post.save(function(err, post){
									if (err){
										reject(err);
									} else {
										user.comments.push(comment);
										user.save(function(err, user){
											if (err){
												resolve(err);
											} else {
												Comment.populate(comment, {
													path: 'author',
													select: ['username', 'profile_img']
												}, function(err, comment){
													if (err){
														reject(err);
													} else {
														resolve(comment);
													}
												});
											}
										});
									}
								});
							}
						});

					}
				});
			}
		});
	});
};

// module.exports.deleteComment = function(href, user){
// 	return new Promise(function(resolve, reject){
// 		var query = {href: href};

// 	});
// };



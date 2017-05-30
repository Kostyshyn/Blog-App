const mongoose = require('mongoose');
const shortId = require('shortid');
const User = require('./user');
const Comment = require('./comment');

var Schema = mongoose.Schema;

var postSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	text: {
		type: String,
		required: true,
		unique: true
	},
	author: {
		type: Schema.ObjectId, 
		ref: 'User'
	},
	comments: [{
		type: Schema.ObjectId,
		ref: 'Comment'
	}],
	likes: [{
		type: Schema.ObjectId,
		ref: 'Like'
	}],
	tags: {
		type: Array,
		default: 'Software Development'
	},
	href: {
		type: String,
		unique: true,
		required: true,
		default: shortId.generate
	},
	date: {
		type: Date,
		default: Date.now
	},
	update_date: {
		type: Date,
		default: Date.now
	}	
});

var likeSchema = mongoose.Schema({
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

var Post = module.exports = mongoose.model('Post', postSchema);
var Like = module.exports = mongoose.model('Like', likeSchema);

module.exports.getPosts = function(limit){
	return new Promise(function(resolve, reject){
		Post.find({}).populate({
			path: 'author', 
			select: ['username', 'profile_img']
		}).exec(function(err, posts){
			if (err){
				reject(err);
			} else {
				resolve(posts);
			}
		});
	});
};

module.exports.getPostByHref = function(href){
	var query = {href: href};
	return new Promise(function(resolve, reject){
		Post.findOne(query).populate([{
			path: 'author', 
			model: 'User',
			select: ['username', 'profile_img']
		}, {
			path: 'comments',
			model: 'Comment',
			populate: {
				path: 'author',
				model: 'User',
				select: ['username', 'profile_img']
			}
		}]).exec(function(err, post){
			if (err){
				reject(err);
			} else {
				resolve(post);
			}
		});
	});
};

module.exports.getPostByTag = function(tag){
	var query = {tags: tag};
	return new Promise(function(resolve, reject){ // change to new populate { }
		Post.find(query).populate('author', ['username', 'profile_img']).exec(function(err, post){
			if (err){
				reject(err);
			} else {
				resolve(post);
			}
		});
	});
};

module.exports.getTags = function(){
	return new Promise(function(resolve, reject){
		Post.find().select('tags').exec(function(err, posts){
			if (err){
				reject(err);
			} else {
				var tags = [];
				var len = posts.length;
				for (var i = 0; i < len; i++){
					if (posts[i].tags){
						tags = tags.concat(posts[i].tags);
					}
				}
				tags = unique(tags);
				resolve(tags);
			}
		});
	});
};

module.exports.addPost = function(post, user){
	return new Promise(function(resolve, reject){
		Post.create(post, function(err, post){
			if (err){
				reject(err);
			} else {
				var query = { _id: user };
				mongoose.model('User').findOne(query, function(err, user){
					if (err){
						reject(err);
					} else {
						user.posts.push(post);
						user.save(function(err){
							if (err){
								reject(err);
							} else {
								resolve(post);
							}
						});
					}
				});
			}
		});		
	});
};

module.exports.updatePost = function(href, user, post, options){
	return new Promise(function(resolve, reject){
		var query = { _id: user };
		mongoose.model('User').findOne(query, function(err, user){
			if (err){
				reject(err);
			} else {
				var query = {
					href: href,
					author: user.id
				};
				Post.findOneAndUpdate(query, post, options, function(err, post){
					if (err){
						reject(err);
					} else {
						resolve(post);
					}
				});	
			}
		});
	});
};

module.exports.deletePost = function(href, user){
	return new Promise(function(resolve, reject){
		var query = { _id: user };
		mongoose.model('User').findOne(query, function(err, user){
			if (err){
				reject(err);
			} else {
				var query = {
					href: href,
					author: user.id
				};
				Post.findOneAndRemove(query, function(err, post){
					if (err){
						reject(err);
					} else if (post){
						var query = { _id: user };
						mongoose.model('User').findOneAndUpdate(query, {
							$pull: { posts: post._id }
						}, { safe: true, new: true }, function(err, user){
							if (err){
								reject(err);
							} else {
								resolve(user);
							}		
						});
					} else {
						reject({ message: 'Post not found', stack: 'Post not found'});
					}
				});	
			}
		});
	});
};

////////////////// Likes /////////////////////////////////

module.exports.like = function(href, user){
	return new Promise(function(resolve, reject){
		var postQuery = { href: href };
		Post.findOne(postQuery, function(err, post){
			if (err){
				reject(err);
			} else {
				var query = { _id: user };
				mongoose.model('User').findOne(query, function(err, user){
					if (err){
						reject(err);
					} else {
						// add checking for post
						var query = {
							author: user.id,
							post: post.id
						};
						Like.findOne(query, function(err, like){
							if (err){
								reject(err);
							} else if (like){
								var p = like.remove();
								p.then(function(like){
									Post.findOneAndUpdate(postQuery, 
										{ $pull: { 'likes': like.id }},
										{ safe: true, new: true },
										function(err, post){
										if (err){
											reject(err);
										} else {
											user.likes.pull({ _id: like.id });
											user.save(function(err, user){
												if (err){
													reject(err);
												} else {
													resolve(post);
												}
											});
										}
									});
								}).catch(function(err){
									reject(err);
								});
							} else {
								Like.create(query, function(err, like){
									if (err){
										reject(err);
									} else {
										post.likes.push(like);
										post.save(function(err, post){
											if (err){
												reject(err);
											} else {
												user.likes.push(like);
												user.save(function(err, user){
													if (err){
														reject(err);
													} else {
														resolve(post);
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


function unique(arr){
	var o = {};
	for (var i = 0; i < arr.length; i++){
		var str = arr[i];
		o[str] = true;
	}
	return Object.keys(o);
};


const Post = require('../models/post');

exports.getPosts = function(req, res, next){
	Post.getPosts(null).then(function(posts){
		sendSuccess(res, posts);
	}).catch(function(err){
		next(err);
	});
};

exports.getPostByHref = function(req, res, next){
	var href = req.params.href;
	Post.getPostByHref(href).then(function(post){
		sendSuccess(res, post);
	}).catch(function(err){
		next(err);
	});
};

exports.getPostsByTag = function(req, res, next){
	var tag = req.params.tag;
	Post.getPostByTag(tag).then(function(post){
		sendSuccess(res, post);
	}).catch(function(err){
		next(err);
	});
};

exports.getTags = function(req, res, next){
	Post.getTags().then(function(tags){
		sendSuccess(res, tags);
	}).catch(function(err){
		next(err);
	});
};

exports.addPost = function(req, res, next){
	var currentUser = req.user.id;
	var post = {
		author: currentUser,
		title: req.body.title,
		text: req.body.text,
		tags: req.body.tags,
		date: req.body.date
	};
	Post.addPost(post, currentUser).then(function(post){
		var loc = 'api/posts/' + post.href;
		res.status(201);
		res.location(loc);
		res.json({
			data: post,
			message: 'Created',
			location: loc,
			status: 201
		});
	}).catch(function(err){
		next(err);
	});
};

exports.updatePost = function(req, res, next){
	var href = req.params.href;
	var currentUser = req.user.id;
	var update = {
		title: req.body.title,
		text: req.body.text,
		tags: req.body.tags,
		update_date: req.body.date
	};
	Post.updatePost(href, currentUser, update, { new: true }).then(function(post){
		sendSuccess(res, post);
	}).catch(function(err){
		next(err);
	});
};

exports.deletePost = function(req, res, next){
	var href = req.params.href;
	var currentUser = req.user.id;
	Post.deletePost(href, currentUser).then(function(post){
		sendSuccess(res, post);
	}).catch(function(err){
		next(err);
	});
};

function sendSuccess(res, data){
	if (!data){
		res.status(200);
		res.json({
			message: 'No content',
			status: 200
		});
	} else {
		res.status(200);
		res.json({
			data: data,
			status: 200
		});
	}
};

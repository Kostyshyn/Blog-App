const express = require('express');
const router = express.Router();

const User = require('../../models/user');
const Post = require('../../models/post');

// require Models //


////////////////////

// API 

router.get('/api', function(req, res, next){
	res.json({
		message: 'Hello from API!'
	});
});

router.post('/api', function(req, res, next){
	var info = req.body.info;
	console.log(info);
	res.status(200);
	res.send('Done');
});

router.get('/posts', function(req, res, next){
	Post.getPosts(null).then(function(posts){
		sendSuccess(res, posts);
	}).catch(function(err){
		next(err);
	});
});

router.get('/userposts', function(req, res, next){
	User.getUserPosts('Kostyshyn').then(function(user){
		sendSuccess(res, user.posts);
	}).catch(function(err){
		next(err);
	});
});

router.post('/user', function(req, res, next){
	var user = {
		username: 'Kostyshyn',
		email: 'kostysyn@ua.fm',
		password: 'pass'
	};
	User.addUser(user).then(function(user){
		req.user = user;
		sendSuccess(res, user);
	}).catch(function(err){
		next(err);
	});
});

router.post('/posts', function(req, res, next){
	User.getUser({username: 'Kostyshyn'}).then(function(user){
		var post = {
			author: user.id,
			title: req.body.title,
			text: req.body.text,
			date: req.body.date
		};
		Post.addPost(post, user.id).then(function(post){
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
	}).catch(function(err){
		next(err);
	});
});

module.exports = router;

function sendSuccess(res, data){
	if (!data){
		res.status(404);
		res.json({
			message: 'No content',
			status: 404
		});
	} else {
		res.status(200);
		res.json({
			data: data,
			status: 200
		});
	}
};
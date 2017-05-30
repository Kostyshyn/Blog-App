const Comment = require('../models/comment.js');

exports.addComment = function(req, res, next){
	var href = req.params.href;
	var currentUser = req.user;
	var	text = req.body.text;

	Comment.addComment(href, currentUser, text).then(function(comment){
		sendSuccess(res, comment);
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
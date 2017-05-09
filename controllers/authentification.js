const User = require('../models/user');
const passport = require('passport');

exports.signup = function(req, res, next){
	passport.authenticate('signup', function(err, user, info){
		if (err){
			next(err);
		} else if(!user){
			sendRes(409, info.message, res);
		} else {
			req.login(user, function(err){
				if (err){
					next(err);
				} else {
					sendRes(201, 'User registed', res);
				}
			});
		}
	})(req, res, next);
};

exports.login = function(req, res, next){
	passport.authenticate('login', function(err, user, info){
		if (err){
			next(err);
		} else if(!user){
			sendRes(400, info.message, res);
		} else {
			req.login(user, function(err){
				if (err){
					next(err);
				} else {
					sendRes(200, 'Authorized', res);
				}
			});
		}
	})(req, res, next);
};

exports.logout = function(req, res, next){
	var id = req.user._id;
	User.logout(id).then(function(user){
		var user = user.username;
		var msg = 'User ' + user + ' is logged out';
		req.logout();
		sendRes(200, msg, res);
	}).catch(function(err){
		next(err);
	});
}

function sendRes(status, msg, res){
	res.status(status);
	res.json({
		message: msg,
		status: status
	});
};
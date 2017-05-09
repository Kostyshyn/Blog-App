var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	passport.use('login', new LocalStrategy({
		passReqToCallback: true
	}, function(req, username, password, done){

		User.findOne({'username': username}, function(err, user){
			if (err){
				return done(err);
			}
			if (!user){
				return done(null, false, {
					message: 'User not found'
				});
			}
			if (!isValidPassword(user, password)){
				return done(null, false, {
					message: 'Invalid password'
				});
			}
			user.online = true;
			user.save().then(function(user){
				return done(null, user);
			}).catch(function(err){
				return done(err);
			});
		});

	}));

	function isValidPassword(user, password){
		return bcrypt.compareSync(password, user.password);
	};
	
};
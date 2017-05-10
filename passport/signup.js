var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	passport.use('signup', new LocalStrategy({
		passReqToCallback: true
	}, function(req, username, password, done){
		var findOrCreateUser = function(){
			User.findOne({'username': username}, function(err, user){
				if (err){
					return done(err);
				}
				if (user){
					return done(null, false, {
							message: 'User already exists',
						});
				} else {
					var user = {
						email: req.body.email,
						username: req.body.username,
						password: createHash(password),
						profile_img: req.body.profile_img,
						info: req.body.info,
						online: true,
						created: Date.now()
					};
					User.addUser(user).then(function(user){
						return done(null, user);
					}).catch(function(err){
						return done(err);
					});
				};
			});

		};

		process.nextTick(findOrCreateUser);

	}));

	function createHash(password){
		return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
	};
};
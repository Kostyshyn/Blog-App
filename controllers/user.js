


exports.getProfile = function(req, res, next){
	if (req.user){
		var user = {
			username: req.user.username,
			profile_img: req.user.profile_img,
			id: req.user.id,
			href: req.user.href,
		};
		res.status(200);
		res.json({ user: user });
	} else {
		res.json({
			user: null
		});
	}
};
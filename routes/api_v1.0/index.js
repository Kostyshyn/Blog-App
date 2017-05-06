const express = require('express');
const router = express.Router();

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

module.exports = router;
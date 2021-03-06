const express = require('express');
const router = express.Router();

const authController = require('../../controllers/authentification');
const userController = require('../../controllers/user');
const postController = require('../../controllers/post');
const commentController = require('../../controllers/comment.js');

// require Models //


////////////////////

// API 

// Post routes

router.get('/posts', postController.getPosts);
router.get('/posts/categories', postController.getTags);
router.get('/posts/:href', postController.getPostByHref);
router.get('/posts/:href/like', isAuth, postController.like);
router.get('/posts/categories/:tag', postController.getPostsByTag);

router.post('/posts', isAuth, postController.addPost);
router.delete('/posts/:href', isAuth, postController.deletePost);
router.put('/posts/:href', isAuth, postController.updatePost);

// User routes

router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.get('/logout', isAuth, authController.logout);



router.get('/user', userController.getProfile);

// comments

router.post('/posts/:href/comments', isAuth, commentController.addComment);

module.exports = router;

function isAuth(req, res, next){
	if (req.isAuthenticated()){
		return next();
	} else {
		res.status(401);
		res.json({message: 'Unauthorized', status: 401});
	}
};
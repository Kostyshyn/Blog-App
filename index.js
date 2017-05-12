const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const colors = require('colors');
const path = require('path');
const history = require('connect-history-api-fallback');

const init = require('./passport/init');
const config = require('./config');
const api = require('./routes/api_v1.0');

const app = express();
const server = http.createServer(app);

// Server middlewares

app.use(express.static(path.join(__dirname, 'public')));
// app.use(history());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(expressSession({
	secret: 'secret-key',
	saveUninitialized: true,
	resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
init(passport);


/*  config  */


// DB settings

mongoose.connect(config.dbUrl);
const db = mongoose.connection;

db.on('error', function(err){
	console.log(colors.red('DataBase connection error -->', err.message));
});

db.once('connected', function(){
	console.log('DataBase successfully connected to:'.green, config.dbUrl);
});

// Routes

app.use('/api', api);

// Error handling

app.use(function(req, res, next){
	var error = new Error('Not found: ' + req.url);
	error.status = 404;
	next(error);
});

app.use(function(err, req, res, next){
	var status = err.status || 500;
	res.status(status);
	if (err.status == 404){
		res.json({error: 'Client error', message: err.message, status: status});
	} else{
		res.json({error: 'Server error', message: err.message, status: status});
		console.log(colors.red('Server error -->', err.stack));
	}
});

// Server listening

server.on('error', function(err){
	if (err){
		console.log(colors.red('Server listening error -->', err.stack));
	}
});

server.listen(config.port, function(){
	console.log('Express server listenning on port:'.green, config.port);
});









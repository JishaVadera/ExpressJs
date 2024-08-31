// Dependencies
require('dotenv').config();
const port = process.env.PORT;
var express   = require('express'),
   path 	  = require('path'),
   bodyParser = require('body-parser'),
   mongoose   = require('mongoose'),
   cookieParser   = require('cookie-parser'),
   expressSession = require('express-session'),
   passport 	  = require('passport'),
   passportLocal  = require('passport-local');

// Express
var app = express();

// Configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use(cookieParser);
app.use(expressSession({ 
	secret: 'secret-key',
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'bower_components')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Route
app.use('/todo', require('./routes/todo.routes'));
app.use('/', require('./routes/user.routes'));


// Start Server 
app.listen(port, () => {
    // Database Connection
    mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
    console.log("TODO app is running")
    })
    .catch((err) => console.log(err))
    console.log(`Server Start At http://localhost:${port}`)
})
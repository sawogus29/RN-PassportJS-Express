require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');

const SQLiteStore = require('connect-sqlite3')(session);

const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: 'sessions.db', dir: './db' }),
  })
);

app.use('/auth', authRouter);
app.use('/api', apiRouter);

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send('An error has occured');
});

app.listen(3000, () => {
  console.log('App listening port 3000');
});

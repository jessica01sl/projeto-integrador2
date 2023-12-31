var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// abaixo eu crio  os 2 arquivos de rota la em baixo faz o use , aqui ainda vai a rota da catraca
var admRouter = require('./routes/adm');
var siteRouter = require('./routes/site');
var catracaRouter = require('./routes/catraca');

var app = express();

app.set("layout extractScripts", true);
// view engine setup
app.set("layout", "layout/layout"); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// abaixo eu uso os 2 arquivos de rota
app.use('/adm', admRouter);
app.use('/site', siteRouter);
app.use('/catraca', catracaRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

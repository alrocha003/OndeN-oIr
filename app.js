var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();
const mongoose = require('mongoose');

//Conecta ao banco
mongoose.connect('mongodb://grupoaula:grupoaula123@ds133865.mlab.com:33865/api_aula', { useNewUrlParser: true });

//Carrega os Models
const Local = require('./models/Local');
//Carrega as Rotas
var localRouter = require('./routes/local-route');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/local', localRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

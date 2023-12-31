var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require("dotenv");
var cors = require('cors');
// abaixo esta a declaração das rotas que serão feitas
var indexRouter = require('./routes/index');
var motoristasRouter = require('./routes/motoristas');
var linhasRouter = require('./routes/linhas');
var onibusRouter = require('./routes/onibus');
var usuarioRouter = require('./routes/usuario');
var clienteRouter = require('./routes/cliente');





dotenv.config({path:"./.env"})

var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// abaixo usamos as rotas declaradas lá no alto da pagina
app.use('/', indexRouter);
app.use('/motoristas', motoristasRouter);
app.use('/linhas', linhasRouter);
app.use('/onibus', onibusRouter);
app.use('/usuario', usuarioRouter);
app.use('/cliente', clienteRouter);
// app.use('/uploads', express.static(uploads));

module.exports = app;


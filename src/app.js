/**
 * Archivo principal que contiene la configuración del servidor, rutas y
 * conexión a la base de datos
 *
 * @author llira
 * @version 1.0
 * @since 02/05/2021
 */
// Dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
// Local variables
const app = express();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const reviewsRouter = require('./routes/reviews');
const authRouter = require('./routes/auth');

/**
 * Middlewares
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * Connect to the database
 */
mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => console.log('Database connected'));
mongoose.connection.once('error', (err) => console.error('Error: ', err));

/**
 * Routes
 */
app.use('/', indexRouter);
app.use('/api', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/posts/:id/reviews', reviewsRouter);

module.exports = app;

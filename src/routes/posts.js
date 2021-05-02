/**
 * Archivo que contiene las rutas de posts
 *
 * @author llira
 * @version 1.0
 * @since 02/05/2021
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({ message: 'GET /posts' });
});

router.get('/:id', (req, res, next) => {
  res.status(200).send({ message: 'GET /posts/:id' });
});

router.post('/', (req, res, next) => {
  res.status(201).send({ message: 'POST /posts' });
});

router.put('/:id', (req, res, next) => {
  res.status(200).send({ message: 'PUT /posts/:id' });
});

router.delete('/:id', (req, res, next) => {
  res.status(200).send({ message: 'DELETE /posts/:id' });
});

module.exports = router;

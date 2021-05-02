/**
 * Archivo que contiene las rutas de reviews
 *
 * @author llira
 * @version 1.0
 * @since 02/05/2021
 */
const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', (req, res, next) => {
  res.status(200).send({ message: 'GET /posts/:id/reviews' });
});

router.get('/:review_id', (req, res, next) => {
  res.status(200).send({ message: 'GET /posts/:id/reviews/:review_id' });
});

router.post('/', (req, res, next) => {
  res.status(201).send({ message: 'POST /posts/:id/reviews' });
});

router.put('/:review_id', (req, res, next) => {
  res.status(200).send({ message: 'PUT /posts/:id/reviews/:review_id' });
});

router.delete('/:review_id', (req, res, next) => {
  res.status(200).send({ message: 'DELETE /posts/:id/reviews/:review_id' });
});

module.exports = router;

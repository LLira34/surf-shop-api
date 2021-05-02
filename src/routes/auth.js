/**
 * Archivo que contiene las rutas de auth
 *
 * @author llira
 * @version 1.0
 * @since 02/05/2021
 */
const express = require('express');
const router = express.Router();

router.post('/register', (req, res, next) => {
  res.status(201).send({ message: 'POST /register' });
});

router.post('/authenticate', (req, res, next) => {
  res.status(201).send({ message: 'POST /authenticate' });
});

router.get('/profile', (req, res, next) => {
  res.status(200).send({ message: 'GET /profile' });
});

// TODO - Pendiente esta parte
router.put('/profile/:user_id', (req, res, next) => {
  res.status(200).send({ message: 'PUT /profile/:user_id' });
});

router.put('/forgot', (req, res, next) => {
  res.status(200).send({ message: 'PUT /forgot' });
});

router.put('/reset/:token', (req, res, next) => {
  res.status(200).send({ message: 'PUT /reset/:token' });
});

module.exports = router;

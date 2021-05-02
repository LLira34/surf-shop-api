/**
 * Archivo con la ruta principal
 *
 * @author llira
 * @version 1.0
 * @since 02/05/2021
 */
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Surf Shop Api - Home',
    message: 'Welcome to Surf Shop Api by Luis Lira',
  });
});

module.exports = router;

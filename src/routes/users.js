/**
 * Archivo que contiene las rutas de users
 *
 * @author llira
 * @version 1.0
 * @since 02/05/2021
 */
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;

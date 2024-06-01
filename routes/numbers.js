const express = require('express');
const router = express.Router();
const { getNumbers } = require('../controllers/numbersController');

router.get('/:numberId', getNumbers);

module.exports = router;

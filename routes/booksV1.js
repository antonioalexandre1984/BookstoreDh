var express = require('express');
var router = express.Router();
const booksV1Controllers = require('../controllers/booksV1controllers');

router.get('/',booksV1Controllers.getAllBooks);

module.exports = router;

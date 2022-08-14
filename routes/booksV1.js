var express = require('express');
var router = express.Router();
const booksV1Controllers = require('../controllers/booksV1controllers');

router.get("/", booksV1Controllers.getAllBooks);
router.post("/",booksV1Controllers.storeOneBook);
router.get("/:id", booksV1Controllers.getOneBook);
router.put("/:id", booksV1Controllers.updateOneBook);
router.delete("/:id", booksV1Controllers.deleteOneBook);

module.exports = router;

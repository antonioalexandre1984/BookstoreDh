var express = require('express');
var router = express.Router();
const booksV1Controllers = require('../controllers/booksV1controllers');
const verifyToken = require('../middlewares/verifyToken');
    
router.get("/", booksV1Controllers.getAllBooks);
router.get("/:id", booksV1Controllers.getOneBook);

router.use(verifyToken);
router.post("/",booksV1Controllers.storeOneBook);
router.put("/:id", booksV1Controllers.updateOneBook);
router.delete("/:id", booksV1Controllers.deleteOneBook);

module.exports = router;

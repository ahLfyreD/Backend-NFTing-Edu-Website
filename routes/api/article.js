const express = require('express');
const router = express.Router();
const articleController = require('../../controllers/artController');

router.route('/')
    .get(articleController.getAllArticle)
    .post(articleController.createArticle)
       
    router.route('/:id')
    .put(articleController.updateArticle)
    .get(articleController.getArticle)
    .delete(articleController.deleteArticle)

module.exports = router;
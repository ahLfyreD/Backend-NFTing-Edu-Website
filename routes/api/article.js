const express = require('express');
const router = express.Router();
const articleController = require('../../controllers/artController');

router.route('/')
    .get(articleController.getAllArticle)
    .post(articleController.createArticle)
       
    router.route('/:id')
    .put(articleController.updateArticle)
    .get(articleController.deleteArticle)
    .delete(articleController.getArticle)

module.exports = router;
const express = require('express');
const router = express.Router();
const newsDataController = require('../../controllers/newsDataController');
// const ROLES_LIST = require('../../config/roles_list');
// const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(newsDataController.getAllNewsData)
    .post(newsDataController.createsNewsData)
    
    router.route('/:id')
    .put(newsDataController.updateNewsData)
    .get(newsDataController.getNewsData)
    .delete(newsDataController.deleteNewsData)

module.exports = router;
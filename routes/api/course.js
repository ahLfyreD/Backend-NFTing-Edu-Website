const express = require('express');
const router = express.Router();
const courseController = require('../../controllers/CourseController');

router.route('/')
    .get(courseController.getAllCourses)
    .post(courseController.createCourse)
    
    router.route('/:id')
    .put(courseController.updateCourse)
    .get(courseController.deleteCourse)
    .delete(courseController.getCourse)

module.exports = router;
const CourseSchema = require('../model/Course')

const getAllCourses = async (req, res) => {
    const getData = await CourseSchema.find().populate('articles').exec();
    if (!getData) return res.sendStatus(204).json({ 'message': 'No Data found.' });
    res.json(getData);
}

const createCourse = async (req, res) => {
    const {title, banner, description, dateCreated, dateUpdated} = req.body
    if (!title || !banner || !description)  return res.status(400).json({ 'message': 'All fields required.' });

    try {
        const result = await CourseSchema.create({
            title: title,
            banner: banner,
            description: description,
            dateCreated: dateCreated,
            dateUpdated: dateUpdated
        });
        res.sendStatus(201).json({'success': "Updated successfully"});
    } catch (error) {
        console.error(error)
    }
}

const updateCourse = async (req, res) => { 
    if(!req?.params?.id) {
        res.sendStatus(400).json({ 'message': "ID parameter is required" })
    }

    const updateData = await CourseSchema.findOne({_id: req.params.id}).exec();
    if (!updateData) {
        return res.status(204).json({ 'message': `NO data matches ID ${req.params.id}` });
    }
    if (req.body?.title) updateData.title = req.body.title;
    if (req.body?.banner) updateData.banner = req.body.banner;
    if (req.body?.description) updateData.description = req.body.description;
    const result = await updateData.save();
    res.json(result);
}

const deleteCourse = async (req, res) => {
    if(!req?.params?.id) { res.sendStatus(400).json({ 'message': 'Data ID is required.'});
    }
    const deletedData = await CourseSchema.findOne({_id: req.params.id}).exec();
    if (!deletedData) {
        return res.status(204).json({ 'message': `No Data matches ID ${req.params.id}`});
    }
    const result = await deletedData.deleteOne({ _id: req.params.id});
    res.json(result);
}

const getCourse = async (req, res) => {
    if (!req?.params?.id) return res.sendStatus(400).json({ 'message': 'News Data ID is required.'});
    const courseSchema = await CourseSchema.findOne({_id: req.params.id}).populate('articles').exec();
    if (!courseSchema) {
        return res.status(204).json({ 'message': `No News Data matches ID ${req.params.id}`});
    }
    res.json(courseSchema);
}

module.exports = {
    getAllCourses,
    createCourse,
    updateCourse,
    deleteCourse,
    getCourse
};
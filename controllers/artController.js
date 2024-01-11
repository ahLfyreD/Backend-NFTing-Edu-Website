const Article = require('../model/Article');
const CourseSchema = require('../model/Course')


const getAllArticle = async (req, res) => {
    const getArticle = await Article.find();
    res.json(getArticle)

}

const createArticle = async (req, res) => {
    const { banner, title, content, duration, level, courseID, description, status } = req.body;

    try {
        const result = await Article.create({
            banner: banner,
            content: content,
            courseID: courseID,
            duration: duration,
            description: description,
            level: level,
            title: title,
            dateCreated: new Date(),
            dateUpdated: new Date(),
            status: status,
        });

        const filter = { _id: courseID };
        let doc = await CourseSchema.findOne(filter);
        const articles = doc.articles
        doc.articles = [...articles, result._id]
        await doc.save()
        return res.json({ 'success': "Created successfully" });
    } catch (error) {
        console.error(error)
    }


}

const updateArticle = async (req, res) => {
    if (!req?.params?.id) {
        res.sendStatus(400).json({ 'message': "ID parameter is required" })
    }

    const updateData = await Article.findOne({ _id: req.params.id }).exec();
    if (!updateData) {
        return res.status(204).json({ 'message': `NO data matches ID ${req.params.id}` });
    }
    if (req.body?.title) updateData.title = req.body.title;
    if (req.body?.banner) updateData.banner = req.body.banner;
    if (req.body?.description) updateData.description = req.body.description;
    if (req.body?.level) updateData.level = req.body.level;
    if (req.body?.status) updateData.status = req.body.status;
    if (req.body?.content) updateData.content = req.body.content;
    updateData.markModified('dateUpdated');
    const result = await updateData.save();
    res.json(result);

}

const deleteArticle = async (req, res) => {
    if (!req?.params?.id) {
        res.sendStatus(400).json({'message': "Data ID is required." });
    }
    const deleteRequest = await Article.findOne({_id: req.params.id}).exec();
    if(!deleteRequest) {
        return res.status(204).json({'message': `No Data matches ID ${req.params.id}` });
    }

    const result = await deleteRequest.deleteOne({_id: req.params.id});
    res.json(result)
}

const getArticle = async (req, res) => {
    
    if (!req?.params?.id) return res.status(404).json({'message': "Data ID is required." });
    const article = await Article.findOne({ _id: req.params.id }).exec();
    if (!article) {
        return res.status(204).json({'message': `No Data matches ID ${req.params.id}` });
    }
    res.json(article);
}

module.exports = {
    getAllArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticle
};
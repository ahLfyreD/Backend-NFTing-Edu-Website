const NewsData = require('../model/NewsData');

const getAllNewsData = async (req, res) => {
    const getNews = await NewsData.find();
    if (!getNews) return res.sendStatus(204).json({ 'message': 'No News Data found.' });
    res.json(getNews);
}

const createsNewsData = async (req, res) => {
    const { image, title, content } = req.body;
    if (!image || !title || !content) return res.status(400).json({ 'message': 'All fields required.' });

    try {
        const result = await NewsData.create({
            image: image,
            title: title,
            content: content
        });
        res.sendStatus(201).json({'success': "Updated successfully"});
    } catch (error) {
        console.error(error)
        
    }
}

const updateNewsData = async (req, res) => {
    if(!req?.params?.id) {
        res.sendStatus(400).json({ 'message': 'ID parameter is required.'})
    }

    const updatedNews = await NewsData.findOne({_id: req.params.id}).exec();
    if (!updatedNews) {
        return res.status(204).json({ 'message': `No News Data matches ID ${req.params.id}`});
    }
    if (req.body?.image) updatedNews.image = req.body.image;
    if (req.body?.title) updatedNews.title = req.body.title;
    if (req.body?.content) updatedNews.content = req.body.content;
    const result = await updatedNews.save();
    res.json(result);
}

const deleteNewsData = async (req, res) => {
    if(!req?.params?.id) {
        res.sendStatus(400).json({ 'message': 'News Data ID is required.'});
    }
    const deletedNews = await NewsData.findOne({_id: req.params.id}).exec();
    if (!deletedNews) {
        return res.status(204).json({ 'message': `No News matches ID ${req.params.id}`});
    }
    const result = await deletedNews.deleteOne({ _id: req.params.id});
    res.json(result);
    // res.json({"success": "Created"})
}

const getNewsData = async (req, res) => {
    if (!req?.params?.id) return res.sendStatus(400).json({ 'message': 'News Data ID is required.'});
    const newsData = await NewsData.findOne({_id: req.params.id}).exec();
    if (!newsData) {
        return res.status(204).json({ 'message': `No News Data matches ID ${req.params.id}`});
    }
    res.json(newsData);
}

module.exports = { 
    getAllNewsData,
    createsNewsData,
    updateNewsData,
    deleteNewsData,
    getNewsData 
 };
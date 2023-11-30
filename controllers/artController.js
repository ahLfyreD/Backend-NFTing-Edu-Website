const Article = require('../model/Article');


const getAllArticle = async (req, res) => {
    const getArticle = await Article.find();
    res.json(getArticle)

}

const createArticle = async (req, res) => {
    const { banner, title, content, duration, courseID } = req.body;
    
        try {
            const result = await Article.create({
                title: title,
                banner: banner,
                content: content,
                duration: duration,
                courseID: courseID
            });
            
            return res.json({ 'success': "Created successfully" });
            // console.log(result)
        } catch (error) {
            console.error(error)
        }
    
}

const updateArticle = async (req, res) => {

}

const deleteArticle = async (req, res) => {

}

const getArticle = async (req, res) => {

}

module.exports = {
    getAllArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticle
};
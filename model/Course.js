const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    articles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Article'
        }
    ],
    status: Boolean,
    description: String,
    dateCreated: Date,
    dateUpdated: Date

});

module.exports = mongoose.model('Course', CourseSchema);
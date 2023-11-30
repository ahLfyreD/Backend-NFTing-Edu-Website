const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    courseID: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    // This is the difficulty levels for beg..med and pro
    diffLevel: String,
    // This is for the publish and draft
    status: String,
    duration: Number,
    content: String,
    dateCreated: {type: Date, default: Date.now},
    dateUpdated: Date   
});

module.exports = mongoose.model('Article', articleSchema);
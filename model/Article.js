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
    level: {
        enum: ['beginner', 'medium', 'expert'],
        type: String,
        required: [true, 'please provide a difficulty level']
    },
    // This is for the publish and draft
    status: {
        enum: ['publish', 'draft'],
        type: String,
        required: [true, 'please provide a status']
    },
    duration: Number,
    description: String,
    content: String,
    dateCreated: {type: Date, default: Date.now},
    dateUpdated: {type: Date, default: Date.now}    
});

module.exports = mongoose.model('Article', articleSchema);
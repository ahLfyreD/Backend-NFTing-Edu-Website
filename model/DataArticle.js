const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    status: true,
    beginner: [
        {
            title: {
                type: String,
                required: true
            },
            articleBanner: {
                type: String,
                required: true
            },
            level: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },

        }
    ],
    medium: [
        {
            title: {
                type: String,
                required: true
            },
            articleBanner: {
                type: String,
                required: true
            },
            level: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },

        }
    ],
    proficient: [
        {
            title: {
                type: String,
                required: true
            },
            articleBanner: {
                type: String,
                required: true
            },
            level: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },

        }
    ]
    
})
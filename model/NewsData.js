const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema ({
    image : {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    content : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('NewsData', newsSchema);
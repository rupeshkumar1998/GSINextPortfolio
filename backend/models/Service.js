// models/Service.js
const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    bannerImage: {
        type: String,
        required: true
    },
    businessParagraph: {
        type: String,
        required: true
    },
    serviceParagraph: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Service', ServiceSchema);

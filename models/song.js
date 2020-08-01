const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    creator: {
        type: [mongoose.Schema.Types.ObjectId],
        require: true,
        ref: 'Artist'
    },
    publicationDate: {
        type: Date,
        require: true
    },
    duration: {
        type: Number,
        require: true
    }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Song', songSchema);;
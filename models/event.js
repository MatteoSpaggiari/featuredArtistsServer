const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    artists: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        require: true,
        ref: 'Artist'
    },
    place: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('event', eventSchema);;
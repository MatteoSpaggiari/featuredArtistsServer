const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artistSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    genres: {
        type: [String],
        required: false
    },
    band: {
        type: Boolean,
        default: false      
    },
    components: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        ref: 'Artist'
    },
    repertoire: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        ref: 'Song'
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Artist', artistSchema);;
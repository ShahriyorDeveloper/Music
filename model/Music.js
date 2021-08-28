const mongoose = require('mongoose');

const MusicSchema = mongoose.Schema({
    name: {
        type: String,
    },
    singer: {
        type: String,
    },
    comment: {
        type: String,
    }
})


module.exports = mongoose.model('music', MusicSchema);



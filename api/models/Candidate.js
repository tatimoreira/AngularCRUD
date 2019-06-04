const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Candidate = new Schema({
    person_name: {
        type: String
    },
    job: {
        type: String
    },
    resume: {
        type: String
    }
}, {
        collection: 'candidate'
    });

module.exports = mongoose.model('Candidate', Candidate);
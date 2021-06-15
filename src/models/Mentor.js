const mongoose = require('mongoose')
const user = require('./User')
const Schema = mongoose.Schema

const MentorSchema = Schema({
    name: String,
    techStack: String,
    groupId: String,
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

module.exports = mongoose.model('Mentor', MentorSchema)
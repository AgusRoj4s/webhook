const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    slackUserId: String,
    techStack: String,
    groupId: String,
    email: String,
    mentorName: String
})

module.exports = mongoose.model('User', UserSchema)
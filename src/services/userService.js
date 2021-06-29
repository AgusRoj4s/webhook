const { response } = require('express');
const funciones = require('../utils/index');
const User = require('../models/User');
const Mentor = require('../models/Mentor');
const axios = require('axios').default;

exports.getAllUsers = async() => {
    try {
        const response = await User.find()
        return response
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
};

exports.saveUser = async(slackId, stack, userEmail) => {
    try {
        let mentor = await funciones.mentorAssignment(stack)
        let user = await new User({ slackUserId: slackId, techStack: stack, groupId: mentor.groupId, email: userEmail, mentorName: mentor.name, mentorEmail: mentor.email })
        await user.save()
        await Mentor.findByIdAndUpdate(mentor._id, { $push: { 'user': user } });
        const response = { mentorName: user.mentorName, mentorEmail: mentor.email, idMentorUserSlack: mentor.idMentorUserSlack, groupId: user.groupId, techStack: user.techStack, userEmail: user.email, slackUserId: user.slackUserId }
        axios({
            method: 'POST',
            url: 'https://hooks.zapier.com/hooks/catch/8332339/boj133r/',
            data: response
        }).then(res => console.log(res.data));
        return response;
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
};

exports.getOneUser = async(id) => {
    try {
        const response = await User.findById(id)
        return response
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
};
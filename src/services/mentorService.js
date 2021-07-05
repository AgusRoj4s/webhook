const e = require('express');
const Mentor = require('../models/Mentor');
exports.getAllMentors = async() => {
    try {
        const response = await Mentor.find()
            .populate('user')
        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};

exports.getOneMentor = async(id) => {
    try {
        const response = await Mentor.findById(id)
            .populate('user')
        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};

exports.saveMentor = async(gId, stack, mentorName, mentorEmail, slackId) => {
    try {
        let mentor = new Mentor({ groupId: gId, techStack: stack, name: mentorName, email: mentorEmail, idMentorUserSlack: slackId })
        mentor.save()
        return mentor
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
};

exports.getMentorByTech = async(tech) => {
    try {
        let response = await Mentor.find({ techStack: tech })
        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};
exports.getMentorByGroup = async(group) => {
    try {
        const response = await Mentor.find({ groupId: group })
        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};
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

exports.getOneMentor = async(gId) => {
    try {
        const response = await Mentor.findOne({ groupId: gId })
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

exports.deleteMentor = async(group) => {
    try {
        const mentor = await Mentor.findOne({ groupId: group });
        if (!mentor) {
            return { response: 'mentor not found!' };
        }
        await mentor.remove();
        return {
            response: 'mentor deleted'
        };
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
};
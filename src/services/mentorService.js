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

exports.saveMentor = async(gId, stack, mentorName) => {
    try {
        let mentor = new Mentor({ groupId: gId, techStack: stack, name: mentorName })
        mentor.save()
        return mentor
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
};

exports.getMentorByTech = async(tech) => {
    try {
        if(tech == "Fullstack"){
            let array = await Mentor.find()
            let filtrado = array.filter(x => x.techStack == "Backend" || x.techStack == "Frontend")
            console.log(filtrado)
            return filtrado
        }else{
            let response = await Mentor.find({ techStack: tech })
            return response;
        }
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
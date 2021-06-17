const { response } = require('express');
const MentorService = require('../services/mentorService');

getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};


mentorChoise = (mentorArray) => {
    let indice = getRandomInt(0, mentorArray.length);
    return indice;
};

exports.mentorAssignment = async(techStack) => {
    try {
        const response = await MentorService.getMentorByTech(techStack)
        const filtrado = response.filter(x => x.user.length < 30)
        if (filtrado.length == 0) {
            throw new Error("Mentores techStack sin capacidad/no existe el stack")
        }
        let indiceMentor = mentorChoise(filtrado)
        return filtrado[indiceMentor]
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
};
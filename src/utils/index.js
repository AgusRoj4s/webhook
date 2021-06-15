const MentorService = require('../services/mentorService');

getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};


mentorChoise = (mentorArray) => {
    let indice = getRandomInt(0, mentorArray.length);
    if (mentorArray[indice].user.length < 30) {
        return indice
    } else {
        return false;
    }
};

exports.mentorAssignment = async(techStack) => {
    try {
        const response = await MentorService.getMentorByTech(techStack)
        let indiceMentor = mentorChoise(response)
        if (!indiceMentor) {
            indiceMentor = mentorChoise(response)
        }
        return response[indiceMentor]
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
};
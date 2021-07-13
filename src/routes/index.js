const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const mentorController = require('../controllers/mentorController');
module.exports = () => {
    router.get('/users/', userController.getUsers);
    router.get('/user/:slackUserId', userController.getOneUser);
    router.post('/user/', userController.saveUser);
    router.delete('/user/:slackUserId', userController.deleteUser)

    router.get('/mentors/', mentorController.getMentors);
    router.get('/mentors/:tech', mentorController.getMentorsByTech);
    router.get('/mentor/:groupId', mentorController.getOneMentor);
    router.post('/mentor/', mentorController.saveMentor);
    router.delete('/mentor/:groupId', mentorController.deleteMentor);
    return router;
};
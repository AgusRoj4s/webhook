const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const mentorController = require('../controllers/mentorController');
module.exports = () => {
    router.get('/users/', userController.getUsers);
    router.get('/user/:id', userController.getOneUser);
    router.post('/user/', userController.saveUser);

    router.get('/mentors/', mentorController.getMentors);
    router.get('/mentors/:tech', mentorController.getMentorsByTech);
    router.get('/mentor/:id', mentorController.getOneMentor);
    router.get('/mentorGroup/:groupId', mentorController.getMentorByGroup)
    router.post('/mentor/', mentorController.saveMentor);
    return router;
};
const UserService = require('../services/userService');
const MentorService = require("../services/mentorService");

exports.getUsers = async(req, res) => {
    try {
        const response = await UserService.getAllUsers();
        return res.status(200).json({ ok: true, result: response });
    } catch (error) {
        return res.status(404).json({ ok: false, error: error.message });
    }
};

exports.saveUser = async(req, res) => {
    try {
        const response = await UserService.saveUser(req.body.slackUserId, req.body.techStack, req.body.email)
        return res.status(200).json({ ok: true, result: response })
    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message });
    }
};

exports.getOneUser = async(req, res) => {
    try {
        const response = await UserService.getOneUser(req.params.slackUserId);
        return res.status(200).json({ ok: true, result: response });
    } catch (error) {
        return res.status(404).json({ ok: false, error: error.message });
    }
};

exports.deleteUser = async(req, res) => {
    try {
        const response = await UserService.deleteUser(req.params.slackUserId);
        return res.status(200).json({ ok: true, result: response });
    } catch (error) {
        return res.status(404).json({ ok: false, error: error.message });
    }
};
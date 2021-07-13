const MentorService = require("../services/mentorService");
exports.getMentors = async(req, res) => {
    try {
        const response = await MentorService.getAllMentors();
        return res.status(200).json({ ok: true, result: response });
    } catch (error) {
        return res.status(404).json({ ok: false, error: error.message });
    }
};
exports.getOneMentor = async(req, res) => {
    try {
        const response = await MentorService.getOneMentor(req.params.groupId);
        return res.status(200).json({ ok: true, result: response });
    } catch (error) {
        return res.status(404).json({ ok: false, error: error.message });
    }
};

exports.getMentorsByTech = async(req, res) => {
    try {
        const response = await MentorService.getMentorByTech(req.params.tech);
        if (response.length == 0) return res.status(404).json({ ok: false, error: "not found techstack" });
        else return res.status(200).json({ ok: true, result: response });
    } catch (error) {
        return res.status(404).json({ ok: false, error: error.message });
    }
};

exports.saveMentor = async(req, res) => {
    try {
        const response = await MentorService.saveMentor(req.body.groupId, req.body.techStack, req.body.name, req.body.email, req.body.idMentorUserSlack);
        return res.status(200).json({ ok: true, result: response });
    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message });
    }
};
exports.deleteMentor = async(req, res) => {
    try {
        const response = await MentorService.deleteMentor(req.params.groupId);
        return res.status(200).json({ ok: true, result: response });
    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message });
    }
};
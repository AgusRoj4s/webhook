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
        const response = await MentorService.getOneMentor(req.params.id);
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

exports.getMentorByGroup = async(req, res) => {
    try {
        const response = await MentorService.getMentorByGroup(req.params.groupId);
        return res.status(200).json({ ok: true, result: response });
    } catch (error) {
        return res.status(404).json({ ok: false, error: error.message });
    }
};

exports.saveMentor = async(req, res) => {
    try {
        const response = await MentorService.saveMentor(req.body.groupId, req.body.techStack, req.body.name);
        return res.status(200).json({ ok: true, result: response });
    } catch (error) {
        return res.status(404).json({ ok: false, error: error.message });
    }
};
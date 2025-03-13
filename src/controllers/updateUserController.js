const updateUserService = require("../services/updateUserService")

const updateUserController = async (req, res) => {
    try {
        const {params, body} = req;

        const camposObrigatorios = Object.keys(body);
        for (const campo of camposObrigatorios) {
            if (!body[campo]) {
                return res.status(400).json({ mensagem: `Campo ${campo} não foi fornecido` });
            }
        }

        const fieldToUpdate = await updateUserService(params.id, body)
        return res.status(204).json({});
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"internal server error"})
    }
}

module.exports = updateUserController;
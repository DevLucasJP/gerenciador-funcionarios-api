const createUserService = require("../services/createUserService")

const createUserController = async (req, res) => {
    try {
        const data = req.body;

        const camposObrigatorios = ["nome", "email", "senha", "role","confirmarSenha"];
        for (const campo of camposObrigatorios) {
            if (!data[campo]) {
                return res.status(400).json({ mensagem: `Campo ${campo} não foi preenchido` });
            }
        }

        if (data.senha !== data.confirmarSenha) {
            return res.status(400).json({ mensagem: "Não foi possível confirmar a senha" })
        }

        const user = await createUserService({
            nome: data.nome,
            email: data.email,
            senha: data.senha,
            role: data.role
        });

        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"internal server error"})
    }
}

module.exports = createUserController;
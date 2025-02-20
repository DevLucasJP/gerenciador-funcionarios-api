const createUserService = require("../services/createUserService")

const createUserController = (req, res) => {

    const data = req.body;

    const camposObrigatorios = ["nome", "email", "senha", "confirmarSenha"];
    for (const campo of camposObrigatorios) {
        if (!data[campo]) {
            return res.status(400).json({mensagem:`Campo ${campo} não foi preenchido`});
        }
    }

    if (data.senha !== data.confirmarSenha) {
        return res.status(400).json({mensagem:"Não foi possível confirmar a senha"})
    }

    const user = createUserService();
    res.status(201).json(user);
}

module.exports = createUserController;
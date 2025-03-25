import Encrypter from "../../helpers/encrypt/bcrypt.js";
import UserMongoRepository from "../../repositories/mongo-repository.js";
import jwt from "jsonwebtoken";

const userRepository = UserMongoRepository;

const loginController = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const requiredFields = ["email", "senha"];

        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(422).json({ mensagem: `Campo ${field} não foi preenchido` });
            }
        }

        const user = await userRepository.findByEmail(email);
        if (!user) {
            return res.status(401).json({ message: "Acesso negado" })
        }

        const comparePassword = await Encrypter.comparePassword(senha, user.senha);
        if (!comparePassword) {
            return res.status(401).json({ message: "Senha inválida" });
        }

        const isActive = user.isActive;
        if (!isActive) {
            return res.status(400).json({ message: "Usuário inativo" })
        }

        const secret = process.env.SECRET_KEY;
        const token = jwt.sign(
            {
                nome: user.nome,
                email: user.email,
                isActive: user.isActive,
                role: user.role
            }, secret
        )

        return res.status(200).json({
            user,
            senha: user.senha = undefined,
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error" });
    }
}

export default loginController
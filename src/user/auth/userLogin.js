import validate from "../../helpers/validate.js";
import createToken from "./helpers/createToken.js";
import userLoginService from "./services/userLoginService.js";

const loginController = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const requiredFields = ["email", "senha"];

        const error = validate(requiredFields, req.body);

        if (error) {
            return res.status(422).json({ mensagem: `Campo ${error} não foi preenchido` })
        }

        const user = await userLoginService(email, senha);

        const token = createToken(user);

        return res.status(200).json({
            user,
            senha: user.senha = undefined,
            token
        });
    } catch (error) {
        console.error(error);

        if (error.message === "Email ou senha incorretos") {
            return res.status(401).json({ message: "Dados incorretos" })
        }
        return res.status(500).json({ message: "internal server error" });
    }
}

export default loginController
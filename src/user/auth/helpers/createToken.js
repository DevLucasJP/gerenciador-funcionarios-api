import jwt from "jsonwebtoken";

const createToken = (user) => {
    const secret = process.env.SECRET_KEY;
    const token = jwt.sign(
        {
            id: user.id,
            nome: user.nome,
            email: user.email,
            isActive: user.isActive,
            role: user.role
        }, secret
    )

    return token;
}

export default createToken
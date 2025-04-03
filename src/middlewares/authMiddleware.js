import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: "Acesso negado" });
    }

    const [, token] = authorization.split(" ");

    try {
        const secret = process.env.SECRET_KEY;

        const decode = jwt.verify(token, secret);
        req.body.user = decode;
        next();
    } catch (error) {
        return res.status(401).json({ message: error.message || "Não autorizado" })
    }
}

export default authMiddleware
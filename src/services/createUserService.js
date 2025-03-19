import User from "../entities/User.js"
import encrypter from "../helpers/encrypt/bcrypt.js"
import UserMongoRepository from "../repositories/mongo-repository.js"

const userRepository = UserMongoRepository;

const createUserService = async (user) => {
    const verificarCampo = user.email;

    const usuarioExiste = await userRepository.exists(verificarCampo);

    if (usuarioExiste) {
        throw new Error("Usuário já cadastrado")
    };

    const hashPassword = await encrypter.hash(user.senha);

    const newUser = new User({
        nome: user.nome,
        email: user.email,
        senha: hashPassword,
        role: user.role
    });

    console.log(newUser);

    return await userRepository.create(newUser);
}

export default createUserService
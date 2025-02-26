const User = require("../entities/User");
const encrypter = require("../helpers/encrypt/bcrypt");
const UserMongoRepository = require("../repositories/mongo-repository");

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
        senha: hashPassword
    });

    return await userRepository.create(newUser);
}

module.exports = createUserService;
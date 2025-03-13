const User = require("../entities/User");
const UserMongoRepository = require("../repositories/mongo-repository");

const userRepository = UserMongoRepository;

const updateUserService = async (id, data) => {
    const userData = await userRepository.findById(id);

    if (!userData) {
        throw new Error("Usuário não encontrado")
    };

    const user = new User(userData);
    user.update(data);

    return await userRepository.update(id, user);
}

module.exports = updateUserService;
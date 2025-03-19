import UserMongoRepository from "../repositories/mongo-repository.js";

const userRepository = UserMongoRepository;

const removeUserService = async (userId) => {
    const userData = await userRepository.findById(userId);

    if (!userData) {
        throw new Error("Usuário não encontrado")
    };

    return await userRepository.removeOne(userId);
}

export default removeUserService
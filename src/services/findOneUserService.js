import UserMongoRepository from "../repositories/mongo-repository.js"

const userRepository = UserMongoRepository;

const findOneUserService = async (userId) => {
    const searchingUser = await userRepository.findById(userId);

    if (!searchingUser) {
        throw new Error("O usuário buscado não foi encontrado");
    }

    return searchingUser;
}

export default findOneUserService
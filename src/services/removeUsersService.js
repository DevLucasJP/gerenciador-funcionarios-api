import UserMongoRepository from "../repositories/mongo-repository.js"

const userRepository = UserMongoRepository;

const removeUsersServices = async () => {
    return await userRepository.remove();
}

export default removeUsersServices
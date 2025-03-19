import UserMongoRepository from "../repositories/mongo-repository.js"

const userRepository = UserMongoRepository;

const removeAllUsersServices = async () => {
    return await userRepository.remove();
}

export default removeAllUsersServices
import UserMongoRepository from "../repositories/mongo-repository.js"

const userMongoRepository = UserMongoRepository;

const findAllUsersService = async () => {
    const users = await userMongoRepository.findAll();

    if (!users) {
        return [];
    }

    return users;
}

export default findAllUsersService
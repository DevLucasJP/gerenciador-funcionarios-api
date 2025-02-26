const UserMongoRepository = require("../repositories/mongo-repository")

const userMongoRepository = UserMongoRepository;

const findAllUsersService = async () => {
    const users = await userMongoRepository.findAll();

    if (!users) {
        return [];
    }

    return users;
}

module.exports = findAllUsersService;
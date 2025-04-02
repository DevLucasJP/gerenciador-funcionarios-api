import Encrypter from "../../../helpers/encrypt/bcrypt.js";
import UserMongoRepository from "../../../repositories/mongo-repository.js";

const userRepository = UserMongoRepository;

const userLoginService = async (email, senha) => {
    const user = await userRepository.findByEmail(email);

    if (user) {
        const comparePassword = await Encrypter.comparePassword(senha, user.senha);
        const isActive = user.isActive;
        
        if (comparePassword && isActive) {
            return user;
        }
    }

    throw new Error("Email ou senha incorretos");
}

export default userLoginService
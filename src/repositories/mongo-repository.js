const userSchema = require("../schemas/userSchema");

class UserMongoRepository {
    static userModel = userSchema;

    static async create (data) {
        const userData = {
            nome: data.nome,
            email: data.email,
            senha: data.senha
        };

        const user = await this.userModel.create(userData);

        return user;
    }
}

module.exports = UserMongoRepository
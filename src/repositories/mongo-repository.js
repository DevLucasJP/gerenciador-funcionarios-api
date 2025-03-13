const userSchema = require("../schemas/userSchema");

class UserMongoRepository {
    static userModel = userSchema;

    static async create (data) {
        const userData = {
            nome: data.nome,
            email: data.email,
            senha: data.senha,
            role: data.role
        };

        const user = await this.userModel.create(userData);

        return user;
    }

    static async exists (data) {
        const verifyUser = await this.userModel.exists({email: data});

        return !!verifyUser
    }

    static async findAll () {
        return await this.userModel.find();
    }

    static async findById (id) {
        const user = await this.userModel.findOne({_id: id}).lean();
        delete user._id;

        return user;
    }

    static async update (id, data) {
        return await this.userModel.findOneAndUpdate(
            {_id: id},
            {
                $set: data
            }
        );
    }
}

module.exports = UserMongoRepository
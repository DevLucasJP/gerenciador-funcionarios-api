import userSchema from "../schemas/userSchema.js"
import { Types } from "mongoose"

class UserMongoRepository {
    static userModel = userSchema;

    static async create(data) {
        const userData = {
            nome: data.nome,
            email: data.email,
            senha: data.senha,
            role: data.role
        };

        const user = await this.userModel.create(userData);

        return user;
    }

    static async exists(data) {
        const verifyUser = await this.userModel.exists({ email: data });

        return !!verifyUser
    }

    static async findAll() {
        return await this.userModel.find();
    }

    static async findById(id) {
        const user = await this.userModel.findOne({ _id: id }).lean();

        if (!user) {
            return false;
        }

        const userWithoutId = Object.assign({}, user, { id: user._id });

        delete userWithoutId._id;
        return userWithoutId;
    }

    static async findByEmail(email) {
        const user = await this.userModel.findOne({ email }).lean();

        if (!user) {
            return false;
        }

        const userWithoutId = Object.assign({}, user, { id: user._id });

        delete userWithoutId._id;
        return userWithoutId;
    }

    static async update(id, data) {
        return await this.userModel.findOneAndUpdate(
            { _id: id },
            {
                $set: data
            }
        );
    }

    static async remove() {
        return await this.userModel.deleteMany({});
    }

    static async removeOne(userId) {
        return await this.userModel.deleteOne({ _id: userId });
    }
}

export default UserMongoRepository
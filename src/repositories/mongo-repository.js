const userSchema = require("../schemas/userSchema");

class UserMongoRepository {
    static userModel = userSchema;

    static async create (data) {
        console.log(data, "Abcd");
    }
}

module.exports = UserMongoRepository
import bcrypt from "bcrypt"

class Encrypter {
    static async hash (value) {
        const genHash = await bcrypt.hash(value, 12);

        return genHash;
    }

    static async comparePassword (senha, senhaBb) {
        return await bcrypt.compare(senha, senhaBb);
    }
}

export default Encrypter
import bcrypt from "bcrypt"

class Encrypter {
    static async hash (value) {
        const genHash = await bcrypt.hash(value, 12);

        return genHash;
    }
}

export default Encrypter
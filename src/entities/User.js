const userRolesEnum = require("../helpers/enums/userRoles")

class User {
    constructor ({nome, email, senha, role, isActive, createdAt}) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.role = this.#validateUserRoles(role);
        this.isActive = isActive || true;
        this.createdAt = createdAt || new Date();
    }

    #validateUserRoles (role) {
        const normalize = role?.trim().toLowerCase();

        if (!Object.values(userRolesEnum).includes(normalize)) {
            throw new Error(`Regra ${role} é inválida`)
        }

        return normalize;
    }

    update (data) {
        const requiredToUpdate = ["nome", "email", "senha"];

        for (const campo of requiredToUpdate) {
            if (data[campo]) {
                this[campo] = data[campo];
            }
        }
    }
}

module.exports = User;
const userRolesEnum = require("../helpers/enums/userRoles")

class User {
    constructor ({nome, email, senha, role, createdAt}) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.role = this.#validateUserRoles(role);
        this.createdAt = createdAt || new Date();
    }

    #validateUserRoles (role) {
        const normalize = role?.trim().toLowerCase();

        if (!Object.values(userRolesEnum).includes(normalize)) {
            throw new Error(`Regra ${role} é inválida`)
        }

        return normalize;
    }
}

module.exports = User;
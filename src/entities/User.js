class User {
    constructor ({nome, email, senha, createdAt}) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.createdAt = createdAt || new Date();
    }
}

module.exports = User;
const users = [
    {
        nome:"Teste2",
        email:"abcd123@gmail.com",
        senha:"qwer1234"
    }
]

const createUserService = (user) => {
    const verificarCampo = user.email;

    const usuarioExiste = users.find((u) => u.email === verificarCampo)

    if (usuarioExiste) {
        throw new Error("Usuário já cadastrado")
    };

    return user;
}

module.exports = createUserService;
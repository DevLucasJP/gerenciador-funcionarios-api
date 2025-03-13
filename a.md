 const verificarCampo = user.email;

    const usuarioExiste = await userRepository.exists(verificarCampo);

    if (usuarioExiste) {
        throw new Error("Usuário já cadastrado")
    };

    const hashPassword = await encrypter.hash(user.senha);

    const newUser = new User({
        nome: user.nome,
        email: user.email,
        senha: hashPassword,
        role: user.role
    });

    return await userRepository.create(newUser);
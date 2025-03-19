import findAllUsersService from "../services/findAllUsersService.js"

const findAllUsersController = async (req, res) => {
    try {
        const users = await findAllUsersService();

        if (!users.length) {
            return res.status(204).json({message: "Usuários não listados"})
        }

        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"internal server error"})
    }
}

export default findAllUsersController
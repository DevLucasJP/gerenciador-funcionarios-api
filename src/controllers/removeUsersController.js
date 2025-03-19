import removeUsersServices from "../services/removeUsersService.js";

const removeUsersController = async (req, res) => {
    try {
        const deletedUsers = await removeUsersServices();
        res.status(204).json({
            data: deletedUsers,
            message: "Usuários removidos com sucesso"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "internal server error"})
    }
}

export default removeUsersController
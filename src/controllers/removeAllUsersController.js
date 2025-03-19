import removeAllUsersServices from "../services/removeAllUsersService.js";

const removeUsersController = async (req, res) => {
    try {
        const deletedUsers = await removeAllUsersServices();
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
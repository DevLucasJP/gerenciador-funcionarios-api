import removeUserServices from "../services/removeUserService.js";

const removeUserController = async (req, res) => {
    try {
        const {params} = req;

        const deletedUser = await removeUserServices(params.id);
        res.status(204).json({
            data: deletedUser,
            message: "Usuário removido com sucesso"
        })
    } catch (error) {

    }
}

export default removeUserController
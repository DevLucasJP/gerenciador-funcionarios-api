import removeOneUserServices from "../services/removeOneUserService.js";

const removeOneUserController = async (req, res) => {
    try {
        const {params} = req;

        const deletedUser = await removeOneUserServices(params.id);
        res.status(204).json({
            data: deletedUser,
            message: "Usuário removido com sucesso"
        })
    } catch (error) {

    }
}

export default removeOneUserController
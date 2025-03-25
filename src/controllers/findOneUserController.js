import findOneUserService from "../services/findOneUserService.js";

const findOneUserController = async (req, res) => {
    try {
        const { params } = req;

        const searchingUser = await findOneUserService(params.id);

        return res.status(200).json(searchingUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "internal server error" });
    }
}

export default findOneUserController
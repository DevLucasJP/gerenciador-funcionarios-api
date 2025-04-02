class MissingParamsError extends Error {
    constructor(paramName) {
        super(`Campo ${paramName} não foi preenchido`);

        this.name = "MissingParamsError";
    }
}

export default MissingParamsError
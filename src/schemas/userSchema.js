const { Schema, default: mongoose } = require("mongoose");

const user = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "operador"],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", user)
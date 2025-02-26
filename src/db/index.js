const { default: mongoose } = require("mongoose");

function dbConncetion () {
    mongoose.connect(process.env.DB_HOST);

    const db = mongoose.connection;

    db.once("open", () => {
        console.log("Conectado ao banco de dados")
    })

    db.on("error", console.error.bind(console, "erro de conexão"))
}

module.exports = dbConncetion;
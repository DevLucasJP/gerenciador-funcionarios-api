import mongoose from "mongoose"

function dbConncetion () {
    console.log(process.env.DB_HOST);
    mongoose.connect("mongodb://localhost:27017");

    const db = mongoose.connection;

    db.once("open", () => {
        console.log("Conectado ao banco de dados")
    })

    db.on("error", console.error.bind(console, "erro de conexão"))
}

export default dbConncetion;
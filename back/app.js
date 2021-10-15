require('dotenv').config()

// configuracion del servidor
const express = require("express")
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Agregar las ruta a escuchar
app.use("/api", require("./routes/routes"));

//configuracion con la base de datos

const moongose = require("mongoose");
moongose.connect(process.env.BD_URI)
    .then(() => console.log("conectado a la base datos"))
    .catch(err => console.error(err));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "/site/"));
    app.get("*", (req, res) => {
        res.sendFile(__dirname + "/site/index.html");
    });
};  

const port = process.env.PORT;
app.listen(port, () => console.log(`servidor en http://localhost:${port}`));


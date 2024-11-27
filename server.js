import express from 'express'
import cors from 'cors'

const app = express();
const port = 3333;

app.use(cors());

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.get("/primeira-rota", (req, res) => {
    console.log("REQUISIÇÂO FOI CHAMADA...")

    //res.send("<div><h2 style='color: red;'>OK FUNCIONANDO</h2></div>")

    res.send("<img src='https://sujeitoprogramador.com/steve.png' width='100' height='100' />")
})

app.get("/users", async (req, res) => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();

    let htmlResponse = data.map( (user) => `<div>${user.name} - ${user.email}</div>`).join("")

    console.log(htmlResponse);

    res.send(htmlResponse)
})

app.listen(port, () => {
    console.log(`Backend rodando: http://localhost:${port}`)
})
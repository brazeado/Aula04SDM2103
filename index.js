

console.log("oi gente");

const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Oi Gente!')
})

app.get('/usuarios/:id', (req, res) => {
    let id = req.params.id;
    res.send('Lista de Usuários...'+id)
    })

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware para liberar CORS para todas as origens
app.use(cors());

// Middleware para interpretar JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Rotas
app.get('/', (req, res) => {
    res.send('Servidor API rodando na Vercel!');
});

app.post('/api/dados', (req, res) => {
    const {temperatura, umidade} = req.body;

    if (!temperatura || !umidade) {
        return res.status(400).json({error: 'Dados incompletos!'});
    }

    res.status(200).json({status: 'Dados recebidos com sucesso!'});
});

// Exporta o handler para a Vercel
module.exports = app;

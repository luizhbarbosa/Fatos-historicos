const express = require('express');
const { servicoBuscarFatoPorAno, servicoValidaAno } = require('./servico/servico.js');

const app = express();

app.get('/', (req, res) => {
    let anoFato = req.query.ano;

    if (servicoValidaAno(anoFato)) {
        var fato = servicoBuscarFatoPorAno(anoFato);
        res.json({ fato: fato });
    } else {
        res.status(400).json({ erro: 'Parâmetro ano inválido' });
    }
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta: 8080");
});

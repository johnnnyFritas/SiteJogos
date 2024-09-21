const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/proxy', (req, res) => {
  
  const url = 'https://script.google.com/macros/s/AKfycbwONzykXdPcXeUmWkFpz-_QEc1yGdcG0wgK9p2jmc3natEAb6m__iynEkjrjQCIefrH/exec'; 

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  })
  .then(response => response.text())
  .then(data => res.send(data))
  .catch(error => {
    console.error('Erro:', error);
    res.status(500).send('Erro ao enviar dados ao Google Apps Script');
  });
});

app.listen(3000, () => {
  console.log('Servidor proxy rodando na porta 3000');
});

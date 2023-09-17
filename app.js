const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configuração de middleware para processar solicitações JSON
app.use(express.json());

// Defina suas rotas aqui
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

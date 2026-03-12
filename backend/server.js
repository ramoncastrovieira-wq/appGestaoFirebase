const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// Caminho correto para o router
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Aqui deve ser uma função do router
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
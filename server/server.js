import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

// importar o banco de dados
import db from './utils/database.js';

// importar o arquivo de rotas
import rotasAdmin from './routes/admin.routes.js';

const servidor = express();

servidor.use(cors());
servidor.use(morgan('dev'));
servidor.use(express.json());

servidor.use('/admin', rotasAdmin);

const PORTA = process.env.PORT || 5000;

servidor.listen(PORTA, () => {
  db();
  console.log(`Servidor rodando na porta http://localhost:${PORTA}🚀`);
});
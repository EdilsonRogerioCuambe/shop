import { Schema, model } from "mongoose";

const clienteSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  endereco: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  rua: {
    type: String,
    required: true,
  },
  numeroCasa: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  dataCriacao: {
    type: Date,
    required: true,
  },
  dataNascimento: {
    type: Date,
    required: true,
  },
  bi: {
    type: String,
    required: true,
  },
});

const Cliente = model("Cliente", clienteSchema);

export default Cliente;
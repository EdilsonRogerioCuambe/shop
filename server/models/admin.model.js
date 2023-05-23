import { Schema, model } from "mongoose";

const adminSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  bi: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  codigo_postal: {
    type: String,
    required: true,
  },
  bairro: {
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
  numero_casa: {
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
  data_nascimento: {
    type: Date,
    required: true,
  },
  pais: {
    type: String,
    required: true,
  },
  provincia: {
    type: String,
    required: true,
  },
  papel: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Admin = model("Admin", adminSchema);

export default Admin;
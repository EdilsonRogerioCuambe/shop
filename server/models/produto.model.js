import { Schema, model } from "mongoose";

const produtoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
  quantidadeEstoque: {
    type: Number,
    required: true,
  },
  quantidadeVendida: {
    type: Number,
    required: true,
  },
  dataCriacao: {
    type: Date,
    required: true,
  },
});

const Produto = model("Produto", produtoSchema);

export default Produto;
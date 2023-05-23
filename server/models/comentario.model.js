import { Schema, model } from "mongoose";

const comentarioSchema = new Schema({
  conteudo: {
    type: String,
    required: true,
  },
  autor: {
    type: Schema.Types.ObjectId,
    ref: "Cliente", // Referência ao modelo Cliente (se necessário)
    required: true,
  },
  produto: {
    type: Schema.Types.ObjectId,
    ref: "Produto", // Referência ao modelo Produto
    required: true,
  },
  dataCriacao: {
    type: Date,
    default: Date.now,
  },
});

const Comentario = model("Comentario", comentarioSchema);

export default Comentario;

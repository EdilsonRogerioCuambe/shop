import { Schema, model } from "mongoose";

const categoriaSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  dataCriacao: {
    type: Date,
    required: true,
  },
});

const Categoria = model("Categoria", categoriaSchema);

export default Categoria;
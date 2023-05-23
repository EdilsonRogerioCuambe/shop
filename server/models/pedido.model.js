import { Schema, model } from 'mongoose';

const pedidoSchema = new Schema(
  {
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
    pedido: [
      {
        produto: { type: Schema.Types.ObjectId, ref: 'Produto' },
        quantidade: Number
      }
    ],
    total: Number
  },
  {
    timestamps: true
  }
);

const Pedido = model('Pedido', pedidoSchema);

export default Pedido;

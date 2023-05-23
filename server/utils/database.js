import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB conectado com sucesso: ${con.connection.host}😎😤`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectDB;
import { MONGO_URL } from "./config.js";
import mongoose from "mongoose";
const { Schema } = mongoose;

// conectar

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado ao MongoDB!");
  } catch (err) {
    throw new Error(err);
  }
};

// disconectar

const disconnect = async () => {
  await mongoose.disconnect();
  console.log("Disconectado do MongoDB");
};

// setar schema e modelo

const schemaPrevisao = new Schema({
  cidade: String,
  data: String,
  min: Number,
  max: Number,
});
const Previsao = mongoose.model("Previsao", schemaPrevisao);

// savar dados no mongo

const salvarPrevisaoNoMongo = async (previsaoTempo) => {
  try {
    const novaPrevisao = new Previsao(previsaoTempo);
    await novaPrevisao.save();
    console.log("Dados salvos com sucesso");
  } catch (err) {
    throw new Error(err);
  }
};

// funcao principal

const salvarPrevisao = async (previsaoTempo) => {
  try {
    await connect();
    await salvarPrevisaoNoMongo(previsaoTempo);
    console.log("Tudo ok!!!");
  } catch (err) {
    throw new Error(err);
  }
  await disconnect();
};

// export funcao

export default salvarPrevisao;

const mongoose = require("mongoose");
const cursosSchema = new mongoose.Schema(
  {
    id: { type: Number },
    descrição: { type: String },
    dataInclusao: { type: String },
    ativo: { type: Boolean },
    horario: { type: String },
    bootcamp: { type: Boolean },
    quantidadeAlunos: { type: Number },
    gratuito: { type: Boolean },
    cidade: { type: String },
    estado: { type: String },
  },
  {
    versionKey: false,
  }
);

const cursos = mongoose.model("collectionCursos", cursosSchema);

module.exports = cursos;

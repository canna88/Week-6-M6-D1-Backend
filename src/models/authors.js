import { model, Schema } from "mongoose";

const AuthorSchema = new Schema({
  nome: { type: String },
  cognome: { type: String },
  email: { type: String },
  dataDiNascita: { type: String }, // Puoi anche utilizzare il tipo di dato Date se preferisci gestire le date in modo più robusto
  avatar: { type: String }
});

export const Author = model("Author", AuthorSchema,"authors");

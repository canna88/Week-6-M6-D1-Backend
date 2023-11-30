import express from "express";
import { Author } from "../models/authors.js";
import checkUser from "../middlewares/checkUser.js";

const authorsRouter = express.Router();

authorsRouter.use(express.json()); // Questa dichiarazione abilita il middleware per il parsing JSON per tutte le richieste in questo router

authorsRouter.get("/", async (req, res) => {
  try {
    const authors = await Author.find({}); // Esegui la query per ottenere tutti gli autori

    res.json(authors); // Invia la risposta JSON con gli autori
  } catch (error) {
    console.error("Errore durante il recupero degli autori:", error);
    // Invia una risposta di errore
    res.status(500).json({ message: "Internal Server Error" });
  }
});

authorsRouter.get("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Autore non trovato" });
    }
    res.json(author);
  } catch (error) {
    console.error("Errore durante il recupero dell'autore:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


authorsRouter.post("/", checkUser, async (req,res) => {
  try{
    const newAuthor = new Author(req.body);
    await newAuthor.save();
    res.status(201).json(newAuthor);
  } catch(error) {
    console.error("Errore durante la creazione dell'autore:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
})

authorsRouter.put("/:id", checkUser, async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!author) {
      return res.status(404).json({ message: "Autore non trovato" });
    }
    res.json(author);
  } catch (error) {
    console.error("Errore durante l'aggiornamento dell'autore:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

authorsRouter.delete("/:id", checkUser, async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Autore non trovato" });
    }
    res.status(204).json(); // Risposta vuota con status code 204 No Content
  } catch (error) {
    console.error("Errore durante l'eliminazione dell'autore:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default authorsRouter;

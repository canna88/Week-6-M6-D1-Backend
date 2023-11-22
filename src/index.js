import express from "express";
import apiRouter from "./apiRouter.js";
import mongoose from "mongoose";

// mongodb+srv://alessiocanna88:nAtLQr0WnaquTVlh@epicode-exercise.vcg51ig.mongodb.net/

//Inizializzo il servere con Express e la porta
const server = express();
const port = 3030;

//Configuro l'ingresso dei dati al ns server con formato Json
server.use(express.json());

//Creazione router
server.use("/api", apiRouter);

mongoose.connect("mongodb+srv://alessiocanna88:nAtLQr0WnaquTVlh@epicode-exercise.vcg51ig.mongodb.net/epicode")
  .then(() => {
    // Connessione riuscita al database
    server.listen(port, () => {
      console.log("Server is listening on port:" + port);
    });
  })
  .catch((err) => {
    console.error("Errore di connessione al database:", err);
  });



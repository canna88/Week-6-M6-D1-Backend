import express from "express";
import apiRouter from "./routers/apiRouter.js";
import mongoose from "mongoose";
import cors from "cors";


//Inizializzo il servere con Express e la porta
const server = express();
const port = 3030;

//Configuro l'ingresso dei dati al ns server con formato Json
server.use(express.json());

// Configura il middleware cors
server.use(cors());


//Creazione router
server.use("/api", apiRouter);

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    // Connessione riuscita al database
    server.listen(port, () => {
      console.log("Server is listening on port:" + port);
    });
  })
  .catch((err) => {
    console.error("Errore di connessione al database:", err);
  });
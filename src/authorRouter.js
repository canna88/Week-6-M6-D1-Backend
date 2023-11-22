// import express from "express";
// import { Author } from "./schemas/authors.js";

// const authorRouter = express.Router();

// authorRouter.get("/", async (req, res) => {
//   res.json({ message: "authorRouter is working" });

//   const authors = await Author.find({})
// });

// export default authorRouter;


import express from "express";
import { Author } from "./schemas/authors.js";

const authorRouter = express.Router();

authorRouter.get("/", (req, res) => {
  Author.findById("655d0e8ed504efb9d332c4d0")
    .then(authors => {
      // Invia la risposta JSON con gli autori
      res.json({authors });
      res.status(200)
    })
    .catch(error => {
      console.error("Errore durante il recupero degli autori:", error);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

export default authorRouter;

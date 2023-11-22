import express from "express";
import authorRouter from "./authorRouter.js";

//Creazione router
const apiRouter = express.Router();

apiRouter.use("/author",authorRouter)

//Prime chiamate
apiRouter.get("/", (req, res) => {
  res.json({ message: "Hello,world" });
});

apiRouter.post("/", (req, res) => {
});

apiRouter.put("/", (req, res) => {
});

apiRouter.delete("/", (req, res) => {
});

export default apiRouter;

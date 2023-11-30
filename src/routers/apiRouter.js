import express from "express";
import authorsRouter from "./authorsRouter.js";
import blogPostsRouter from "./blogPostsRouter.js";
import companiesRouter from "./companiesRouter.js";


//Creazione router
const apiRouter = express.Router();

apiRouter.use("/authors",authorsRouter)
apiRouter.use("/blogposts", blogPostsRouter);
apiRouter.use("/companies", companiesRouter);


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

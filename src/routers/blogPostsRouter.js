import express from "express";
import { BlogPost } from "../models/blogposts.js";
import checkUser from "../middlewares/checkUser.js";

const blogPostsRouter = express.Router();

blogPostsRouter.use(express.json()); // Questa dichiarazione abilita il middleware per il parsing JSON per tutte le richieste in questo router

blogPostsRouter.get("/", async (req, res) => {
  try {
    const blogPosts = await BlogPost.find({});
    res.json(blogPosts);
  } catch (error) {
    console.error("Errore durante il recupero dei blog posts", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


blogPostsRouter.get("/:id", async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id);
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post non trovato" });
    }
    res.json(blogPost);
  } catch (error) {
    console.error("Errore durante il recupero del blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

blogPostsRouter.post("/", checkUser, async (req, res) => {
  try {
    const newBlogPost = new BlogPost(req.body);
    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (error) {
    console.error("Errore durante la creazione del blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

blogPostsRouter.put("/:id",  checkUser, async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post non trovato" });
    }
    res.json(blogPost);
  } catch (error) {
    console.error("Errore durante l'aggiornamento del blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

blogPostsRouter.delete("/:id", checkUser,  async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.id);

    if (!blogPost) {
      return res.status(404).json({ message: "Blog post non trovato" });
    }
  } catch (error) {
    console.error("Errore durante l'eliminazione del blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default blogPostsRouter;

import express from "express";
import {Company} from "../models/company.js";

const companiesRouter = express.Router();
companiesRouter.use(express.json()); 


companiesRouter.get("/", async (req, res) => {
try {
    const companies = await Company.find({});
    res.json(companies);
} catch (error) {
    console.error("Errore durante il recupero dei compagnie", error);
    res.status(500).json({ message: "Internal Server Error" });
}

});



export default companiesRouter;
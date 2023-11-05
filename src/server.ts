import express, { Application, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import linksRouter from "./app/routes/links";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/links", linksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

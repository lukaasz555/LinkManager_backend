import express, { Application, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("test");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

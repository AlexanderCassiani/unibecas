import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import authRoutes from "./modules/auth/auth.routes.js";
import superadminRoutes from "./modules/superadmin/superadmin.routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", superadminRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

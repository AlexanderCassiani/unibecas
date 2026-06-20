import express from "express";
import authRoutes from "./modules/auth/auth.routes.js";

const app = express();
const port = 3000;

app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

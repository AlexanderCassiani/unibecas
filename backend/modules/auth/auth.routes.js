import express from "express";
import { signup, login, perfil } from "./auth.controller.js";
import { validateToken } from "../../middlewares/validateToken.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/perfil", validateToken, perfil);

export default router;

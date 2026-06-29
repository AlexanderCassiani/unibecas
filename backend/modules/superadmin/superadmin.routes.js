import express from "express";
import { createAdmin } from "./superadmin.controller.js";
import authorize from "../../middlewares/authorize.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { ROLES } from "../../roles.js";

const router = express.Router();

router.post(
  "/superadmin/admin",
  validateToken,
  authorize(ROLES.SUPERADMIN),
  createAdmin,
);

export default router;

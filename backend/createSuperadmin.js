import db from "./config/db.js";
import bcrypt from "bcrypt";
import { ROLES } from "./roles.js";

const usuario = "Alexander";
const email = "alex@gmail.com";
const password = "123456";
const hashedPassword = await bcrypt.hash(password, 12);

db.query(
  "INSERT INTO usuarios (usuario, password, email, rol) VALUES (?, ?, ?, ?)",
  [usuario, hashedPassword, email, ROLES.SUPERADMIN],
  (err, result) => {
    if (err) {
      console.error("Error al crear superadmin:");
      return;
    }
    console.log("Superadmin creado:", result);
  },
);

db.end();

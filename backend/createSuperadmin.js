import db from "./config/db.js";
import bcrypt from "bcrypt";
import { ROLES } from "./roles.js";

const usuario = "Alex";
const email = "alex@gmail.com";
const password = "123456";
const hashedPassword = await bcrypt.hash(password, 10);

db.query(
  "INSERT INTO usuarios (usuario, password, email, rol) VALUES (?, ?, ?, ?)",
  [usuario, hashedPassword, email, ROLES.SUPERADMIN],
  (err, result) => {
    if (err) {
      console.error("Error al crear superadmin:", err);
      return;
    }
    console.log("Superadmin creado:", result);
  },
);

db.end();

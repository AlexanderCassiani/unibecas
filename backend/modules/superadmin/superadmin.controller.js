import { validarAdmin } from "./superadmin.validator.js";
import db from "../../config/db.js";
import bcrypt from "bcrypt";
import { ROLES } from "../../roles.js";

export const createAdmin = async (req, res) => {
  const { usuario, email, password } = req.body;

  if (!usuario || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Todos los datos son requeridos",
    });
  }

  if (!validarAdmin(usuario, email, password)) {
    return res.status(400).json({
      success: false,
      message: "Datos invalidos",
    });
  }

  let hashedPassword;

  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error al crear el usuario",
    });
  }

  db.query(
    "INSERT INTO usuarios (usuario, email, password, rol) VALUES (?, ?, ?, ?)",
    [usuario, email, hashedPassword, ROLES.ADMIN],
    (err) => {
      if (err) {
        console.error("Error al insertar admin:");
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).json({
            success: false,
            message: "El usuario ya se encuentra registrado",
          });
        }
        return res.status(500).json({
          success: false,
          message: "Ha ocurrido un error en el servidor",
        });
      }

      res.status(201).json({
        success: true,
        message: "Usuario creado exitosamente",
      });
    },
  );
};

import { validarUsuario } from "./auth.validator.js";
import db from "../../config/db.js";
import bcrypt from "bcrypt";
import generateToken from "./auth.token.js";
import { ROLES } from "../../roles.js";

export async function signup(req, res) {
  try {
    const { usuario, email, password } = req.body;

    if (!usuario || !email || !password) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Todos los campos son requeridos",
        },
      });
    }

    if (!validarUsuario(usuario, email, password)) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Datos inválidos",
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const query =
      "INSERT INTO usuarios (usuario, email, password, rol) VALUES (?, ?, ?, ?)";

    db.query(
      query,
      [usuario, email, hashedPassword, ROLES.ESTUDIANTE],
      (err) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            return res.status(409).json({
              success: false,
              error: { message: "El usuario ya se encuentra registrado" },
            });
          }
          return res.status(500).json({
            success: false,
            error: { message: "Error al crear usuario" },
          });
        }

        res
          .status(201)
          .json({ success: true, message: "Usuario creado exitosamente" });
      },
    );
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: { message: "Error al crear usuario" } });
  }
}

export function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: { message: "Todos los campos son requeridos" },
    });
  }

  const query = "SELECT * FROM usuarios WHERE email = ?";

  db.query(query, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: { message: "Error al iniciar sesión" },
      });
    }

    if (result.length === 0) {
      return res
        .status(401)
        .json({ success: false, error: { message: "Credenciales inválidas" } });
    }

    const user = result[0];

    let coincide;

    try {
      coincide = await bcrypt.compare(password, user.password);
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: { message: "Error al iniciar sesión" },
      });
    }

    if (coincide) {
      const token = generateToken(
        user.id_usuario,
        user.usuario,
        user.email,
        user.rol,
      );
      res.json({
        success: true,
        message: "Usuario logueado exitosamente",
        user: {
          id: user.id_usuario,
          usuario: user.usuario,
          email: user.email,
          rol: user.rol,
        },
        token,
      });
    } else {
      return res
        .status(401)
        .json({ success: false, error: { message: "Credenciales inválidas" } });
    }
  });
}

export function perfil(req, res) {
  res.json({ success: true, message: "Perfil del usuario", user: req.user });
}

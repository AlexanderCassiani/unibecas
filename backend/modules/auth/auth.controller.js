import { validarUsuario } from "./auth.validator.js";
import db from "../../config/db.js";
import bcrypt from "bcrypt";
import generateToken from "./auth.token.js";

export async function signup(req, res) {
  try {
    const { usuario, email, password } = req.body;

    if (!usuario || !email || !password) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }

    if (!validarUsuario(usuario, email, password)) {
      return res.status(400).json({ message: "Datos inválidos" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Guardar en la base de datos
    const query =
      "INSERT INTO usuarios (usuario, email, password) VALUES (?, ?, ?)";

    db.query(query, [usuario, email, hashedPassword], (err) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res
            .status(409)
            .json({ message: "El usuario ya se encuentra registrado" });
        }
        return res.status(500).json({ message: "Error al crear usuario" });
      }

      res.status(201).json({ message: "Usuario creado exitosamente" });
    });
  } catch (error) {
    return res.status(500).json({ message: "Error al crear usuario" });
  }
}

export function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Todos los campos son requeridos" });
  }

  const query = "SELECT * FROM usuarios WHERE email = ?";

  db.query(query, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error al iniciar sesión" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const user = result[0];

    let coincide;

    try {
      coincide = await bcrypt.compare(password, user.password);
    } catch (error) {
      return res.status(500).json({ message: "Error al iniciar sesión" });
    }

    if (coincide) {
      const token = generateToken(user.id_usuario, user.usuario);
      res.json({
        message: "Usuario logueado exitosamente",
        token,
        usuario: {
          id: user.id_usuario,
          usuario: user.usuario,
          email: user.email,
        },
      });
    } else {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
  });
}

export function perfil(req, res) {
  res.json({ message: "Perfil del usuario", user: req.user });
}

import jwt from "jsonwebtoken";

export default function generateToken(id_usuario, usuario, email, rol) {
  const token = jwt.sign(
    { id: id_usuario, usuario, email, rol },
    "My llave 100% inhackeable",
    {
      expiresIn: "1h",
    },
  );

  return token;
}

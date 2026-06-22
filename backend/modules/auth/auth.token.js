import jwt from "jsonwebtoken";

export default function generateToken(id_usuario, usuario, email) {
  const token = jwt.sign(
    { id: id_usuario, usuario, email },
    "My llave 100% inhackeable",
    {
      expiresIn: "1h",
    },
  );

  return token;
}

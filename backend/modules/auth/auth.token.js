import jwt from "jsonwebtoken";

export default function generateToken(id_usuario, usuario) {
  const token = jwt.sign(
    { id: id_usuario, usuario },
    "My llave 100% inhackeable",
    {
      expiresIn: "1h",
    },
  );

  return token;
}

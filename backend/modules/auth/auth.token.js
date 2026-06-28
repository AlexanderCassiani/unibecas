import jwt from "jsonwebtoken";

export default function generateToken(id_usuario, usuario, email, rol) {
  const token = jwt.sign(
    { id: id_usuario, usuario, email, rol },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  return token;
}

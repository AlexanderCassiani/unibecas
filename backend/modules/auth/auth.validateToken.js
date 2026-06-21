import jwt from "jsonwebtoken";

export const validateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No se proporcionó el token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const data = jwt.verify(token, "My llave 100% inhackeable");
    req.user = data;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};

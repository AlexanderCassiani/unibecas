export const validarAdmin = (usuario, email, password) => {
  return (
    usuario &&
    email &&
    password &&
    usuario.length >= 3 &&
    email.length >= 3 &&
    password.length >= 6 &&
    email.includes("@")
  );
};

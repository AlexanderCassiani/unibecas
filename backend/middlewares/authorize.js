const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.rol)) {
      return res.status(403).json({
        success: false,
        error: { message: "No tienes permiso para acceder a este recurso" },
      });
    }
    next();
  };
};

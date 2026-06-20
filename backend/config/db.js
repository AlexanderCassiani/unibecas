import mysql2 from "mysql2";

const conexion = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Alex 2008#",
  database: "unibecas",
  port: 3306,
});

conexion.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión a la base de datos establecida correctamente");
});

export default conexion;

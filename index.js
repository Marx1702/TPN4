const express = require("express");
const { PrismaClient } = require("@prisma/client");
const path = require("path");
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Sirve archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Ruta para obtener todos los usuarios
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Escucha en el puerto 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

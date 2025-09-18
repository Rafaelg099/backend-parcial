const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const timeRoutes = require("./routes/timeRoutes");
const weightRoutes = require("./routes/weightRoutes");
const tempRoutes = require("./routes/tempRoutes");
const currencyRoutes = require("./routes/currencyRoutes");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/time", timeRoutes);
app.use("/api/weight", weightRoutes);
app.use("/api/temp", tempRoutes);
app.use("/api/currency", currencyRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



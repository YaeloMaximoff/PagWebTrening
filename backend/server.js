const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require('./routes/events');
const registrationRoutes = require('./routes/registrationRoutes');

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use("/api/users", userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/registrations', registrationRoutes);

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado 🚀"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "El usuario ya existe"
      });
    }

    const newUser = new User({
        name,
        email,
        password
    });

    await newUser.save();

    res.status(201).json({
      message: "Usuario registrado correctamente",
      user: newUser
    });

  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error
    });
  }
});

router.post("/login", async (req, res) => {
  const {email, password} = req.body;
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado"
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Contraseña incorrecta"
      });
    }

    res.json({
      message: 'Login exitoso',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error
    });
  }
});

module.exports = router;
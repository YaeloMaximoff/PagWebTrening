const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

router.post('/create', async (req, res) => {

  try {

    const registration =
      await Registration.create(req.body);
    res.json({
      message: 'Inscripción completada',
      registration
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error registrando inscripción'
    });
  }
});

module.exports = router;
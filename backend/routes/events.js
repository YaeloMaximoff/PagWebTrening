const express = require('express');
const router = express.Router();
const Event = require('../models/Event');


// CREAR EVENTO
router.post('/create', async (req, res) => {

  try {
    const event = new Event(req.body);
    await event.save();
    res.json({
      message: 'Evento creado',
      event
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error creando evento'
    });
  }
});


// OBTENER EVENTOS
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({
      createdAt: -1
    });
    res.json(events);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error obteniendo eventos'
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const event =
      await Event.findById(req.params.id);
    res.json(event);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error obteniendo evento'
    });
  }
});

module.exports = router;
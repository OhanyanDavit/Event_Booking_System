const { createEvent, getEvents, getEventById } = require('../controllers/eventsController');
const jwtVerify = require('../utils/jwtVerify');
const express = require('express');
const router = express.Router();    

router.post('/', jwtVerify, createEvent);
router.get('/', jwtVerify, getEvents);
router.get('/:id', jwtVerify, getEventById);

module.exports = router;

const { createBooking, getBookingById } = require('../controllers/bookingsController');
const jwtVerify = require('../utils/jwtVerify');
const express = require('express');
const router = express.Router();    

router.post('/', jwtVerify, createBooking);
router.get('/:id', jwtVerify, getBookingById);

module.exports = router;

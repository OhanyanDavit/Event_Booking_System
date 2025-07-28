const Booking = require('../models/bookingsModel');
const { getEventById } = require('./eventsController');
const Event = require('../models/eventsModel');
const {createNotification} = require('./notificationsController');;

async function createBooking(req, res) {
    const { eventId, count } = req.body;
    const userId = req.user.id;

    try {
        const newBooking = new Booking({
            user: userId,
            event: eventId,
            count
        });

        const preparedEvent = await Event.findById(eventId);

        if (!preparedEvent) {
            return res.status(404).json({ error: 'Event not found' });
        }

        if (preparedEvent.capacity < count) {
            return res.status(400).json({ error: 'Not enough capacity for this event' });
        }

        const event = await Event.findByIdAndUpdate(eventId, { $inc: { capacity: -count } }, { new: true });

        await newBooking.save();
        
        createNotification('New booking created', userId);

        res.status(201).json({ message: 'Booking created', booking: newBooking });
    } catch (error) {
        res.status(500).json({ error: 'Error creating booking' });
        console.error('Error creating booking:', error);
    }
}

async function getBookingById(req, res) {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id).populate('event user');
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json({ booking });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching booking' });
  }
}

module.exports = {
  createBooking,
  getBookingById
};

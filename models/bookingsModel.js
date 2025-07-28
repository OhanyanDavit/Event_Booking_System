const { mongoose } = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  count: {
    type: Number,
    required: true,
    min: 1
  }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;

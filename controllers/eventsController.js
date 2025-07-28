const Event = require('../models/eventsModel');

async function createEvent(req, res) {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Only admins can create events' });
    }
    const { title, location, date, capacity, price } = req.body;

    try {
        const newEvent = new Event({ title, location, date, capacity, price });
        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
        res.status(500).json({ error: 'Error creating event' });
    }
}

async function getEvents(req, res) {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching events' });
  }
}

async function getEventById(req, res) {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching event' });
  }
}

async function updateEvent(id, capacity) {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, { capacity }, { new: true });
        if (!updatedEvent) {
            throw new Error('Event not found');
        }
        return updatedEvent;
    } catch (error) {
        throw new Error('Error updating event: ' + error.message);
    }
}

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  updateEvent
};

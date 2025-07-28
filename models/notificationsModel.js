const { mongoose } = require('../config/db');

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
  }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
const Notification = require('../models/notificationsModel');

async function createNotification(message, userId) {
    if (!message || !userId) {
        throw new Error('Message and User ID are required');
    }

    try {
        const newNotification = new Notification({ message, user: userId });
        await newNotification.save();
        return { message: 'Notification created successfully', notification: newNotification };
    } catch (error) {
        throw new Error('Error creating notification');
    }
}

module.exports = {
    createNotification
};
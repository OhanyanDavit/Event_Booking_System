const express = require('express');
const mongoose = require('./config/db');
const usersRouter = require('./routers/usersRuter');
const eventsRouter = require('./routers/eventsRouter');
const bookingsRouter = require('./routers/bookingsRouter');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());
app.use('/users', usersRouter);
app.use('/events', eventsRouter);
app.use('/bookings', bookingsRouter);
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const bookingRoutes = require('./routes/booking.js')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/auth', authRoutes); 
app.use('/api/events', eventRoutes);
app.use('/api/bookings',bookingRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.log('Error connecting to MongoDB:', error);
});


const PORT = 5000;
app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`);
});
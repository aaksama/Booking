const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());


const PORT = 5000;
app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`);
});
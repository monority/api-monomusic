const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/mono.routes");
const cors = require('cors')
const server = express();
const dotenv = require('dotenv').config();
 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connected'))
.catch((err) => console.log('Database not connected', err))
server.use(cors());
server.use(express.json())
server.use('/', require("./routes/mono.routes")) 
server.listen(8000, () => console.log(`Server is running on port 8000`))
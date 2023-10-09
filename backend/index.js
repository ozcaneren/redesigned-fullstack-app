const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/Database');
const roomRouter = require('./routes/roomRouter');
const featureRouter = require('./routes/featureRouter');
const contactRouter = require('./routes/contactRouter');

dotenv.config();

const apiPort = 4000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', roomRouter);
app.use('/api', featureRouter);
app.use('/api', contactRouter);


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

connectDB();
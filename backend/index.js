const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/Database');
const roomRouter = require('./routes/roomRouter');
const featureRouter = require('./routes/featureRouter');
const contactRouter = require('./routes/contactRouter');
const aboutRouter = require('./routes/aboutRouter');
const headerRouter = require('./routes/headerRouter');
const footerRouter = require('./routes/footerRouter');

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
app.use('/api', aboutRouter);
app.use('/api', headerRouter);
app.use('/api', footerRouter);


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

connectDB();
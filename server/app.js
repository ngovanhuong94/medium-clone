const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cloudinary = require('cloudinary');

const routes = require('./routes/');

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/medium';

cloudinary.config({
  cloud_name: 'YOUR_CLOUDINARY_NAME_HERE',
  api_key: 'YOUR_CLOUDINARY_API_KEY_HERE',
  api_secret: 'YOUR_CLOUDINARY_API_SECRET_HERE',
});

try {
  mongoose.connect(url, {
    // useMongoClient: true
  });
} catch (error) {
  throw error;
}

const port = 5000 || process.env.PORT;

routes(router);

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
// app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/api', router);

app.listen(port, () => console.log(`Server started at port: ${port}`));

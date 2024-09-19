const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('targetImage'), (req, res) => {
  // Process the uploaded image
  // You might want to use a library like sharp for image processing
  // Save the processed image and return a URL or ID
});
const ARExperience = require('./models/ARExperience');
const mongoose = require('mongoose');
mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });
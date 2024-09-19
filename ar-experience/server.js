const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const app = express();

const upload = multer({ dest: 'uploads/' });

mongoose.connect('mongodb+srv://arexp1:<db_password>@arexp1.klybs.mongodb.net/?retryWrites=true&w=majority&appName=arexp1', { useNewUrlParser: true, useUnifiedTopology: true });

const ARExperience = require('./models/ARExperience');

app.post('/upload', upload.single('targetImage'), (req, res) => {
  // Process the uploaded image
  // You might want to use a library like sharp for image processing
  // Save the processed image and return a URL or ID
});

// Add more routes and server logic here

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
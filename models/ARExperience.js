const mongoose = require('mongoose');

const ARExperienceSchema = new mongoose.Schema({
  targetImageUrl: String,
  contentType: String,
  contentUrl: String,
  uniqueId: String
});

const ARExperience = mongoose.model('ARExperience', ARExperienceSchema);

module.exports = ARExperience;
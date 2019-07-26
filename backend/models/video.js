const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  video_id: String,
  trending_date: String,
  title: String,
  channel_title: String,
  category_id: Number,
  publish_time: String,
  views: Number,
  likes: Number,
  dislikes: Number,
  comment_count: Number,
  thumbnail_link: String,
  comments_disabled: String,
  ratings_disabled: String,
  video_error_or_removed: String,
  description: String,
});

videoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Video', videoSchema);

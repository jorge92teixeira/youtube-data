/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  video_id: String,
  trending_date: String,
  title: String,
  channel_title: String,
  category_id: Number,
  publish_time: String,
  tags: String,
  views: Number,
  likes: Number,
  dislikes: Number,
  comment_count: Number,
  thumbnail_link: String,
  comments_disabled: String,
  ratings_disabled: String,
  video_error_or_removed: String,
  country_code: String,
});

videoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// const gbVideo = mongoose.model('gbVideo', videoSchema, 'gbVideos');
// const usVideo = mongoose.model('usVideo', videoSchema, 'usVideos');
// const deVideo = mongoose.model('deVideo', videoSchema, 'deVideos');
// const frVideo = mongoose.model('frVideo', videoSchema, 'frVideos');
// const caVideo = mongoose.model('caVideo', videoSchema, 'caVideos');
const Video = mongoose.model('Video', videoSchema);

module.exports = {
  Video,
};

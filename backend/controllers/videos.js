const videosRouter = require('express').Router();
const Video = require('../models/video');

// Get all Videos
videosRouter.get('/', async (req, res) => {
  const videos = await Video.find({})
  res.json(videos.map(video => video.toJSON()));
});

// Get top10 videos
videosRouter.get('/top10likes', async (req, res) => {
  const videos = await Video.find({}).sort({likes: -1}).limit(10);
  res.json(videos.map(video => video.toJSON()));
});


module.exports = videosRouter;
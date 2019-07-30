const videosRouter = require('express').Router();
const { gbVideo } = require('../models/video');
const { usVideo } = require('../models/video');
const { caVideo } = require('../models/video');
const { deVideo } = require('../models/video');
const { frVideo } = require('../models/video');
// const Video = require('../models/video');

// Get all Videos
// videosRouter.get('/', async (req, res) => {
//   const videos = await gbVideo.find({})
//   res.json(videos.map(video => video.toJSON()));
// });

videosRouter.get('/top10likesgb', async (req, res) => {
  const videos = await gbVideo.find({}).sort({ likes: -1 }).limit(10);
  res.json(videos.map(video => video.toJSON()));
});
videosRouter.get('/top10likesca', async (req, res) => {
  const videos = await caVideo.find({}).sort({ likes: -1 }).limit(10);
  res.json(videos.map(video => video.toJSON()));
});
videosRouter.get('/top10likesde', async (req, res) => {
  const videos = await deVideo.find({}).sort({ likes: -1 }).limit(10);
  res.json(videos.map(video => video.toJSON()));
});
videosRouter.get('/top10likesfr', async (req, res) => {
  const videos = await frVideo.find({}).sort({ likes: -1 }).limit(10);
  res.json(videos.map(video => video.toJSON()));
});
videosRouter.get('/top10likesus', async (req, res) => {
  const videos = await usVideo.find({}).sort({ likes: -1 }).limit(10);
  res.json(videos.map(video => video.toJSON()));
});

module.exports = videosRouter;

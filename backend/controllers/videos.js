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

  // const query = await gbVideo.aggregate([
  //   {
  //     $sort: { likes: -1 },
  //   },
  //   {
  //     $limit: 100,
  //   },
  //   {
  //     $group: { _id: null, values: { $addToSet: '$video_id' } },
  //   },
  // ]);
  // console.log(query[0].values.length);

  // const videos = await gbVideo.find({
  //   'video_id': { $in: query[0].values },
  // });
  // console.log(videos.length);

  // console.log(videos[0].values.slice(0, 10));

  const videos = await gbVideo.find({}).sort({ likes: -1 }).limit(1000);
  let result = videos.map(e => e.video_id)
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => videos[e])
    .map(e => videos[e]);

  result = result.slice(0, 10);

  res.json(result.map(video => video.toJSON()));
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

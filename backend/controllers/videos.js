const videosRouter = require('express').Router();
// const { gbVideo } = require('../models/video');
// const { usVideo } = require('../models/video');
// const { caVideo } = require('../models/video');
// const { deVideo } = require('../models/video');
// const { frVideo } = require('../models/video');

const { Video } = require('../models/video');

videosRouter.get('/top10views', async (req, res) => {
  const videos = await Video.find({}).sort({ views: -1 }).limit(10);
  res.json(videos.map(video => video.toJSON()));
});

// const getVideos = async (collection, total) => {
//   const videos = await collection.find({}).sort({ likes: -1 }).limit(1000);
//   const result = videos.map(e => e.video_id)
//     .map((e, i, final) => final.indexOf(e) === i && i)
//     .filter(e => videos[e])
//     .map(e => videos[e]);

//   return result.slice(0, total);
// };

// videosRouter.get('/top10likesgb', async (req, res) => {
//   // const query = await gbVideo.aggregate([
//   //   {
//   //     $sort: { likes: -1 },
//   //   },
//   //   {
//   //     $limit: 100,
//   //   },
//   //   {
//   //     $group: { _id: null, values: { $addToSet: '$video_id' } },
//   //   },
//   // ]);
//   // console.log(query[0].values.length);

//   // const videos = await gbVideo.find({
//   //   'video_id': { $in: query[0].values },
//   // });
//   // console.log(videos.length);

//   // console.log(videos[0].values.slice(0, 10));

//   const result = await getVideos(gbVideo, 10);
//   res.json(result.map(video => video.toJSON()));
// });
// videosRouter.get('/top10likesca', async (req, res) => {
//   const result = await getVideos(caVideo, 10);
//   res.json(result.map(video => video.toJSON()));
// });
// videosRouter.get('/top10likesde', async (req, res) => {
//   const result = await getVideos(deVideo, 10);
//   res.json(result.map(video => video.toJSON()));
// });
// videosRouter.get('/top10likesfr', async (req, res) => {
//   const result = await getVideos(frVideo, 10);
//   res.json(result.map(video => video.toJSON()));
// });
// videosRouter.get('/top10likesus', async (req, res) => {
//   const result = await getVideos(usVideo, 10);
//   res.json(result.map(video => video.toJSON()));
// });

// // Searhc for video by id
// videosRouter.get('/search/:id', async (req, res) => {
//   let result = await gbVideo.find({ video_id: req.params.id })
//     .sort({ likes: -1 });
//   console.log(result.length);
//   result = await usVideo.find({ video_id: req.params.id })
//     .sort({ likes: -1 });
//   console.log(result.length);

//   res.json(result[0]);
// });

module.exports = videosRouter;

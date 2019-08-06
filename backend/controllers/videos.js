const videosRouter = require('express').Router();
// const { gbVideo } = require('../models/video');
// const { usVideo } = require('../models/video');
// const { caVideo } = require('../models/video');
// const { deVideo } = require('../models/video');
// const { frVideo } = require('../models/video');

const { Video } = require('../models/video');

// Get Top 10 videos with more views
videosRouter.get('/top10views/:id', async (req, res) => {
  const videos = await Video
    .find({ country_code: req.params.id })
    .sort({ views: -1 })
    .limit(1000);

  let result = videos.map(e => e.video_id)
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => videos[e])
    .map(e => videos[e]);

  result = result.slice(0, 10);

  res.json(result.map(video => video.toJSON()));
});

// Get video by Id
videosRouter.get('/search/:id', async (req, res) => {
  try {
    const result = await Video
      .find({ video_id: req.params.id })
      .sort({ views: -1 });

    const videos = result.slice(0, 1);

    res.json(videos.map(v => v.toJSON()));
    // res.json(result[0].toJSON());
  } catch (exception) {
    res.status(400).end();
  }
});

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

// });

module.exports = videosRouter;

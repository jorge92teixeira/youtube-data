const videosRouter = require('express').Router();

const { Video } = require('../models/video');

const getTop10ForCountry = async (cc) => {
  const data = await Video.aggregate([
    {
      $match: { country_code: cc },
    },
    {
      $sort: { views: -1 },
    },
    {
      $group: {
        _id: '$video_id',
        views: { $max: '$views' },
        title: { $first: '$title' },
        channel_title: { $first: '$channel_title' },
        category_id: { $first: '$category_id' },
        likes: { $first: '$likes' },
        dislikes: { $first: '$dislikes' },
        comment_count: { $first: '$comment_count' },
        thumbnail_link: { $first: '$thumbnail_link' },
        country_code: { $first: '$country_code' },
      },
    },
    {
      $sort: { views: -1 },
    },
    {
      $limit: 10,
    },
  ]);

  return data;
};

// Get top 10 videos with more views
videosRouter.get('/top10views', async (req, res) => {
  const query = [];
  const countryCodes = ['gb', 'us', 'de', 'ca', 'fr'];

  countryCodes.forEach((e) => {
    const aux = getTop10ForCountry(e);
    query.push(aux);
  });

  res.json(await Promise.all(query));
});

// Get video by Id
videosRouter.get('/search/:id', async (req, res) => {
  try {
    const result = await Video
      .find({ video_id: req.params.id })
      .sort({ views: -1 });

    const videos = result.slice(0, 1);

    res.json(videos.map(v => v.toJSON()));
  } catch (exception) {
    res.status(400).end();
  }
});

// Get Top 10 videos with more views
// videosRouter.get('/top10views/:id', async (req, res) => {
//   const videos = await Video
//     .find({ country_code: req.params.id })
//     .sort({ views: -1 })
//     .limit(1000);

//   let result = videos.map(e => e.video_id)
//     .map((e, i, final) => final.indexOf(e) === i && i)
//     .filter(e => videos[e])
//     .map(e => videos[e]);

//   result = result.slice(0, 10);

//   res.json(result.map(video => video.toJSON()));
// });

module.exports = videosRouter;

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknow Endpoint' });
};

module.exports = {
  unknownEndpoint,
};

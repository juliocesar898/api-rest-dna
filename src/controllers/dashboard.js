const { getStatisticsResume } = require('../interactors/dashboard');

const getStatistics = (_, res, next) =>
  getStatisticsResume()
    .then((data) => res.status(200).send(data))
    .catch(next);

module.exports = { getStatistics };

const { checkDnaCode } = require('../interactors/dna');

const checkDna = ({ body }, res, next) =>
  checkDnaCode(body)
    .then((data) => res.status(200).send(data))
    .catch(next);

module.exports = { checkDna };

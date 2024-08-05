const { badRequest, conflict } = require('../errors/customError');

const isValidDna = ({ body: { dna } }, res, next) => {
  try {
    const dimension = dna.length;

    if (dimension !== 6) {
      return next(
        badRequest('La dimension de la matriz debe ser 6')
      );
    }

    for (const sequence of dna) {
      if (sequence.length !== dimension) {
        return next(
          conflict(
            'La matriz debe ser de N x N misma cantidad de filas y columnas'
          )
        );
      }
    }

    // todo Ok
    next();
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};

module.exports = { isValidDna };

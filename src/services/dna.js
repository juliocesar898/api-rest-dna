const { databaseError } = require('../errors/customError');
const Dna = require('../models/dna');

const getDnaCode = (dnaCode) => {
  try {
    const filter = dnaCode ? { dnaCode } : {}
    return Dna.find(filter);
  } catch (error) {
    throw databaseError('An error was occurred when try to get dna codes from DB')
  }
}

const saveDnaCode = (data) => {
  try {
    const newDna = new Dna(data);
    return newDna.save();
  } catch (error) {
    throw databaseError('An error was occurred when try to save a dna code from DB')
  }
}

module.exports = { getDnaCode, saveDnaCode };

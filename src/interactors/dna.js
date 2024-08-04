const { hasSpecialDna } = require('../Utils');
const { forbiddenError } = require('../errors/customError');
const { v4 } = require('uuid');
const { saveDnaCode, getDnaCode } = require('../services/dna');

const checkDnaCode = async ({ dna }) => {
  try {
    const { dnaCode, isSpecial } = hasSpecialDna(dna);
    // Valida si existe codigo dna en BD
    const dnaFound = await getDnaCode(dnaCode);
    if (!dnaFound.length) {
      // si no existe el codigo dna guarda nuevo registro en BD
      const newDna = {
        uid: v4(),
        dnaCode,
        isSpecial
      };
      await saveDnaCode(newDna);
    }
    if (!isSpecial) {
      throw forbiddenError('El ADN indicado no es especial');
    }
    return { message: 'El ADN indicado es especial' };
  } catch (error) {
    throw error;
  }
};

module.exports = { checkDnaCode };

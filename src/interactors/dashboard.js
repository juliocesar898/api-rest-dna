const { getDnaCode } = require('../services/dna');

const getStatisticsResume = async () => {
  try {
    const dnaCodes = await getDnaCode();
    const codes = dnaCodes.map((code) => code.isSpecial);
    const response = {
      count_special_dna: 0,
      count_ordinary_dna: 0,
      ratio: 0,
    };
    for (const code of codes) {
      if (code) {
        response.count_special_dna = response.count_special_dna + 1;
      } else {
        response.count_ordinary_dna = response.count_ordinary_dna + 1;
      }
    }
    response.ratio = response.count_ordinary_dna
      ? (response.count_special_dna / response.count_ordinary_dna).toFixed(2)
      : 0;
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = { getStatisticsResume };

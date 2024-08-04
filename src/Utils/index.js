const { defaultError } = require('../errors/customError');

module.exports = {
  hasSpecialDna: (data) => {
    try {
      let isSpecial = false;
      const dimension = data[0].length;
      const lengthSeq = 4; // tamaño de la secuencias dna
      const columnas = [];
      const diagonales1 = [];
      const diagonales2 = [];

      const specialSeq = ['AAAA', 'TTTT', 'CCCC', 'GGGG'];

      // filas
      const filas = data;

      // columnas
      for (let i = 0; i < dimension; i++) {
        let columna = '';

        for (let j = 0; j < dimension; j++) {
          columna = columna + data[j][i];
        }
        columnas.push(columna);
      }

      // diagonales descendentes
      for (let i = 0; i <= dimension - lengthSeq; i++) {
        if (i) {
          let diagonalSup = '';
          let diagonalInf = '';
          for (let j = 0; j < dimension - i; j++) {
            diagonalSup = diagonalSup + data[j][j + i];
            diagonalInf = diagonalInf + data[j + i][j];
          }
          diagonales1.push(diagonalSup);
          diagonales1.push(diagonalInf);
        } else {
          let diagonal = '';
          for (let j = 0; j < dimension; j++) {
            diagonal = diagonal + data[j][j];
          }
          diagonales1.push(diagonal);
        }
      }

      // diagonales ascendentes
      for (let i = 0; i <= dimension - lengthSeq; i++) {
        if (i) {
          let diagonalSup = '';
          let diagonalInf = '';
          for (let j = 0; j < dimension - i; j++) {
            diagonalSup = diagonalSup + data[dimension - 1 - j - i][j];
            diagonalInf = diagonalInf + data[dimension - 1 - j][j + i];
          }
          diagonales2.push(diagonalSup);
          diagonales2.push(diagonalInf);
        } else {
          let diagonal = '';
          for (let j = 0; j < dimension; j++) {
            diagonal = diagonal + data[dimension - 1 - j][j];
          }
          diagonales2.push(diagonal);
        }
      }

      let AAAA = 0;
      let TTTT = 0;
      let CCCC = 0;
      let GGGG = 0;
      
      // consolida las lecturas de filas, columnas, diagonales y diagonales invertidas
      const registros = [...filas, ...columnas, ...diagonales1, ...diagonales2];
      
      // busca cuantas veces se repiten las secuencias especiales
      for (const registro of registros) {
        for (let i = 0; i < registro.length; i++) {
          if (registro.indexOf(specialSeq[0], i) != -1) {
            AAAA++;
            i = registro.indexOf(specialSeq[0], i) + specialSeq[0].length;
          }

          if (registro.indexOf(specialSeq[1], i) != -1) {
            TTTT++;
            i = registro.indexOf(specialSeq[1], i) + specialSeq[1].length;
          }

          if (registro.indexOf(specialSeq[2], i) != -1) {
            CCCC++;
            i = registro.indexOf(specialSeq[2], i) + specialSeq[2].length;
          }

          if (registro.indexOf(specialSeq[3], i) != -1) {
            GGGG++;
            i = registro.indexOf(specialSeq[3], i) + specialSeq[3].length;
          }
        }
      }

      if (AAAA + TTTT + CCCC + GGGG > 1) {
        isSpecial = true;
      }

      return { dnaCode: data.join(''), isSpecial };
    } catch (error) {
      console.error(error.message);
      throw defaultError('An error has occurred analyzing the DNA sequence');
    }
  },
};

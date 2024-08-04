const { Router } = require('express');
const { checkDna } = require('../controllers/dna');
const { isValidDna } = require('../middlewares/check-input');

const router = Router();

/**
 * @openapi
 * /api/dna:
 *  post:
 *    tags:
 *      - Dna 🧬
 *    description: Checks if DNA is special
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *    responses:
 *       200:
 *         description: OK
 *       403:
 *         description: FORBIDDEN
 */
router.post('/', isValidDna, checkDna);

module.exports = router;

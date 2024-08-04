const { Router } = require('express');
const { getStatistics } = require('../controllers/dashboard');

const router = Router();

/**
 * @openapi
 * /api/dashboard:
 *  get:
 *    tags:
 *      - Dashboard 📜
 *    description: Return statistics of DNA verifications
 *    responses:
 *       200:
 *         description: OK
 *       400:
 *         description: BAD_REQUEST
 */
router.get('/', getStatistics);

module.exports = router;

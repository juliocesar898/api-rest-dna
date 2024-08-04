const { Router } = require('express');

const router = Router();

/**
 * @openapi
 * /api/health:
 *   get:
 *     tags:
 *       - API-Healt-Check ✔
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', (_, res) => {
  res.send('server DNA Qrvey Ok');
});

module.exports = router;

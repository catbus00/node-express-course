const express = require('express');
const router = express.Router();

const { logon, hello } = require('../controllers/controllers');
const middleware = require('../middleware/middleware');

// @route GET /api/v1/hello
router.get('/api/v1/hello', middleware, hello);

// @route POST /api/v1/logon
router.post('/api/v1/logon', logon);

module.exports = router;

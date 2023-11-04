const express = require("express");
const router = express.Router();
const { auth, authLogon, authLogoff } = require("../controllers/auth.js")

router.get('/test', auth);
router.post('/logon', authLogon);
router.delete('/logoff', authLogoff);

module.exports = router;
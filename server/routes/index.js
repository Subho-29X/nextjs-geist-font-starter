const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to CodeConnect API');
});

module.exports = router;

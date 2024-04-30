const path = require('path');
const express = require('express');

const rootDir = require('../utils/rootPath');

const router = express.Router();

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '2.html'));
});

router.post('/users', (req, res, next) => {
  console.log('users');
});

module.exports = router;

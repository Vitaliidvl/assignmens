const path = require('path');
const express = require('express');

const rootDir = require('../utils/rootPath');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '1.html'));
});

module.exports = router;

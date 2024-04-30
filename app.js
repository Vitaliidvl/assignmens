const path = require('path');
const express = require('express');

const rootPath = path.dirname(require.main.filename);

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootPath, 'file', '1.html'));
});

app.use('/');

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(rootPath, 'file', '2.html'));
});

const app = express();

app.listen(3001);

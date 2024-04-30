const path = require('path');
const express = require('express');

const rootPath = path.dirname(require.main.filename);

const app = express();
const router = express.Router();

const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootPath, 'views', '1.html'));
});

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(rootPath, 'views', '2.html'));
});

app.use(homeRoute);
app.use(usersRoute);


app.listen(3001);

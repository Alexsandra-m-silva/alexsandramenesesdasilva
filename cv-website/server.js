const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;
const rootDir = __dirname;

const siteData = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'data', 'siteData.json'), 'utf8')
);

app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));

app.use('/public', express.static(path.join(rootDir, 'public')));

app.get('/', (req, res) => {
  res.render('landing', { siteData });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { siteData });
});

app.listen(port, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});

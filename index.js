require('dotenv').config();
const express = require('express');
const router = require('./app/router');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(router);

app.use((req, res) => {
  res.status(404).render('notFound');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
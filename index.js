const express = require('express');

const albums = require('./data/albums.json');

const app = express();

// Set port
const PORT = process.env.PORT || 9000;

// Allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Set end points for albums
app.get('/api/albums', (req, res) => {
  res.json(albums);
});

app.get('/api/albums/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const selectedAlbum = albums.filter(album => album.id === id);
  res.json(selectedAlbum[0]);
});

// Listen port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;

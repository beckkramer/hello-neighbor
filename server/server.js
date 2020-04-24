const express = require('express');

const ebird = require('./api/ebird.js')
const location = require('./api/location.js');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/location', location);
app.use('/api/ebird', ebird);

// Run the app by serving the static files in the client directory
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
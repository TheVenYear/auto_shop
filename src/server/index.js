const PORT = process.env.PORT || 5000;

const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'build')));
  app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

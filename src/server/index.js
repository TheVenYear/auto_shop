const PORT = 5000;

const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
   console.log('Server is running on port ' + PORT);
});
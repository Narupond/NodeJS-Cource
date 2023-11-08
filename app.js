const express = require('express');
const app = express();
const debug = require('debug')('app');
const morgan = require('morgan');
const port = 5000;

app.use(morgan('combined'))

// ทำการจัดการกับ request ที่เข้ามา
app.get('/', (req, res) => {
    res.send('Hi');
})

app.listen(port, () => {
    debug(`Server is running on http://localhost:${port}`);
  });
const express = require('express');
const app = express();
const debug = require('debug')('app');
const morgan = require('morgan');
const port = 5000;
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

// ทำการจัดการกับ request ที่เข้ามา
app.get('/', (req, res) => {
    res.render('index', {username: 'Naruporn', customer: ["Nrp1", "Nrp2", "Nrp"]});
})

app.listen(port, () => {
    debug(`Server is running on http://localhost:${port}`);
  });
const express = require('express');
var app = express();

app.use('/', require('./routes/index'))

app.listen(80);
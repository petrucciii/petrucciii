const express = require('express');
var app = express();

app.use('/api/', require('./routes/index'))

app.listen(3000);
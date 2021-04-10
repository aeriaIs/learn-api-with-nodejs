const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// PARSE APP/JSON
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());



app.listen(port, () => console.log('Server started'));
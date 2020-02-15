const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require('./api');

const PORT = 3000;
const app = express();
app.use('/api', api);
// const api = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Hello Server Started')
});

app.listen(PORT, ()=>{
    console.log('Server is running on:', PORT)
});
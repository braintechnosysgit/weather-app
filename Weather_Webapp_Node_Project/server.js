const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const cors = require('cors');

const app = express();
app.use(cors({
    "origin" : "*"
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/api',route)


app.listen(3000,()=>{
    console.log('Server starts on port 3000...');
})







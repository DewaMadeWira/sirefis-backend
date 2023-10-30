const express = require('express');
const db = require('./database');
const axios = require('axios');

// import axios from 'axios';
// import { getGpu, getGpuYear } from './database.js';

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.send("This is an API use '/gpu' or '/gpu2020' ");
});
app.get('/gpu', async (req, res) => {
    db.getGpu(req, res);

    // res.send('test');
});
app.post('/gpu', async (req, res) => {
    console.log(req.body); // your JSON
    res.send(req.body); // echo the result back
});
app.get('/gpu:year', async (req, res) => {
    db.getGpuYear(req, res);
});

app.get('/rank', async (req, res) => {
    axios.get('http://127.0.0.1:5000/').then(function (response) {
        res.send(response.data);
    });
});

// app.listen(3000, '192.168.1.11');

app.listen(8080, () => {
    console.log('server is running on port 8080');
});

// app.listen(8080, '192.168.1.10', () => {
//     console.log('server is running on port 8080');
// });

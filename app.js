import express from 'express';
import axios from 'axios';
import { getGpu, getGpuYear } from './database.js';

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/gpu', async (req, res) => {
    const gpu = await getGpu();
    res.json(gpu);
});
app.post('/gpu', async (req, res) => {
    console.log(req.body); // your JSON
    res.send(req.body); // echo the result back
});
app.get('/gpu:year', async (req, res) => {
    const gpu = await getGpuYear(req.params.year);
    res.json(gpu);
});

app.get('/rank', async (req, res) => {
    const gpu = await getGpu();
    axios
        .post('http://127.0.0.1:5000/rank-edas', { gpu_data: gpu })
        .then(function (response) {
            res.send(response.data);
        });
});

// app.listen(3000, '192.168.1.11');

//app.listen(8080, '192.168.1.11', () => {
//    console.log('server is running on port 8080');
//});

// app.listen(8080, '192.168.1.10', () => {
//     console.log('server is running on port 8080');
// });
app.listen(8080, () => {
    console.log('server is running on port 8080');
});

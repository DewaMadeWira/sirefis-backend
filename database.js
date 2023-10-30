// import Pool from 'pg'
const Pool = require('pg').Pool;

require('dotenv').config();

const credentials = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.PASSWORD,
    port: 5432,
};

const pool = new Pool(credentials);

async function getGpu(req, res) {
    pool.query('SELECT * FROM clean_gpu ', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}
function getGpuYear(startYear) {
    const result = pool.query(
        `SELECT * FROM clean_gpu where testDate >= ${startYear}`
    );
    return result.rows;
}

// console.log(await getGpu());

module.exports = { getGpu, getGpuYear };

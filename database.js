import mysql from 'mysql2';
const pool = mysql
    .createPool({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'sirefis_spk',
    })
    .promise();

export async function getGpu() {
    const [result] = await pool.query('SELECT * FROM gpu_spk');
    return result;
}
export async function getGpuYear(startYear) {
    const [result] = await pool.query(
        `SELECT * FROM clean_gpu where testDate >= ${startYear}`
    );
    return result;
}
console.log(await getGpu());

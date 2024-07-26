import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to Server')
})

app.get('/ping', async (req, res) => {
    const [result] = await pool.query(`SELECT "hello worldx" as RESULT`);
    console.log(result[0]);
    res.send(result[0])
})

app.listen(PORT)
console.log('Server on port', PORT)
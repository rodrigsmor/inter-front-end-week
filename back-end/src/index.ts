import express from 'express';

const app = express();
const PORT = 3333;

app.get('/', (request, response) => response.send('Express + Typescript Server'));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
});
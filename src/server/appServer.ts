import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', ((req, res) => {
    res.send('Hello Node.js!')
}));

app.listen(PORT,() => {
    return console.log(`server is running on ${PORT}`);
})
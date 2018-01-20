const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hola mundo</h1>');
});

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});
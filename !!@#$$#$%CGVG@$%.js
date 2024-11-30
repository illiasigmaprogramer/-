const express = require('express');
const app = express();
const PORT = 2438;

app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
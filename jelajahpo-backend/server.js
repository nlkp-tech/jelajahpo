const exprees = require('express');
const app = exprees();
const PORT = 3001;

app.use(exprees.json());

app.get('/', (req, res) => {
    res.send('Selamat Datang di JelajahPo API');
});

app.listen(PORT, () => {
    console.log(`Server JelajahPo jalan di http://localhost:${PORT}`);
});
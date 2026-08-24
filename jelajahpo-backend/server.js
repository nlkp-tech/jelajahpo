const exprees = require('express');
const app = exprees();
const PORT = 5000;

app.use(exprees.json());

app.get('/', (req, res) => {
    res.send('JelajahPo Backend API berjalan! ');
});

app.listen(PORT, () => {
    console.log(`Server JelajahPo jalan di http://localhost:${PORT}`);
});
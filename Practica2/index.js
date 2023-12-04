const express = require('express');
const app = express();

// Sirve los archivos estáticos desde el directorio "public"
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/createYourBrand', (req, res) => {
    res.sendFile(__dirname + '/Marca/form_marca.html');
});

app.get('/Nox', (req, res) => {
    res.sendFile(__dirname + '/Nox/nox.html');
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
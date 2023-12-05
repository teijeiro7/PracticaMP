import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from '../dirname.js';
import router from "../router.js";
import brands from "../brands.js";

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Use the router
app.use(router);
app.use(brands);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/createYourBrand', (req, res) => {
    res.sendFile(__dirname + '/views/form_marca.html');
});

app.get('/marca', (req, res) => {
    res.sendFile(__dirname + '/views/marca.html');
});

app.get("/prueba", (req, res) => {
    res.sendFile(__dirname + "/views/prueba.html");
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
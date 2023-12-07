import express from 'express';
import { __dirname } from './dirname.js';
import marcas from "./src/brandsService.js";
import { addBrand } from './src/brandsService.js';

const router = express.Router();

router.get('/', (req, res) => {
    const brandValues = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla 

    res.render('index', { title: 'Main Page', infoMarcas: brandValues }); // renderizamos el contenido necesario para la página principal
});

router.get('/:brandName', (req, res) => {
    const brandValues = marcas.values(req.params.brandName);

    res.render('marca', { marcaPrincipal: brandValues });
});

router.get('/createYourBrand', (req, res) => {
    const brandValues = Array.from(marcas.values());

    res.render('form_marca', { // renderizamos el contenido necesario para el formulario
        title: 'Main Page',
        infoMarcas: brandValues,
    });
});



router.post('/form', (req, res) => {
    addBrand(bName, bYear, bFundator, bImage, bPlayers);
    res.redirect("/");
});

export default router;

import express from 'express';
import { __dirname } from './dirname.js';
import marcas, { brand } from "./src/brandsService.js";
import { addBrand } from './src/brandsService.js';
import { getBrand } from './src/brandsService.js';
// import path from 'path';
const router = express.Router();

router.get('/', (req, res) => {
    const brandValues = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla 

    res.render('index', { title: 'Main Page', infoMarcas: brandValues }); // renderizamos el contenido necesario para la página principal

});

router.get('/formularioMarca', (req, res) => {
    res.render('form_marca', { title: 'Form Page' }); //renderizamos el contenido necesario para el formulario
});


router.get('/:brandName', (req, res) => {
    let brandValues = getBrand(req.params.brandName); //asignamos a brandValues el valor de la marca que queremos mostrar
    let palas = brandValues.brandRackets; //asignamos a palas el valor de las palas de la marca que queremos mostrar
    console.log(brandValues.brandRackets);
    res.render('marca', { marcaPrincipal: brandValues, palasPrincipal: palas }); //renderizamos el contenido necesario para la marca seleccionada
});

export default router;

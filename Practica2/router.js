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
    const brandValues = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    res.render('form_marca', { title: 'Form Page', values: brandValues }); //renderizamos el contenido necesario para el formulario
});

router.post('/accionForm', (req, res) => {
    res.render("newBrand", {
        name: req.body.brandName,
        year: req.body.brandYear,
        founder: req.body.brandFounder,
        image: req.body.brandImage,
        players: req.body.brandPlayers,
    })
});



router.get('/:brandName', (req, res) => {
    let nameBrand = req.params.brandName; //asignamos a nameBrand el valor de la marca que queremos mostrar
    let brandValues = getBrand(req.params.brandName); //asignamos a brandValues el valor de la marca que queremos mostrar
    let infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    let palas = brandValues.brandRackets; //asignamos a palas el valor de las palas de la marca que queremos mostrar
    res.render('marca', { nombreMarca: nameBrand, desplegable: infoDesplegable, marcaPrincipal: brandValues, palasPrincipal: palas }); //renderizamos el contenido necesario para la marca seleccionada
});

router.get("/:brandName/edit", (req, res) => {
    let nameBrand = req.params.brandName; //asignamos a nameBrand el valor de la marca que queremos mostrar
    let brandValues = getBrand(req.params.brandName); //asignamos a brandValues el valor de la marca que queremos mostrar
    let infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    res.render("editBrand", { nombreMarca: nameBrand, desplegable: infoDesplegable, marcaPrincipal: brandValues }); //renderizamos el contenido necesario para la marca seleccionada
});

export default router;

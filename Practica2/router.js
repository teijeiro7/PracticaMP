import express from 'express';
import { __dirname } from './dirname.js';
import marcas, { addBrand, brand } from "./src/brandsService.js";
import { getBrand } from './src/brandsService.js';
import { addRacket } from './src/brandsService.js';

const router = express.Router();

router.get('/', (req, res) => {
    const brandValues = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla 

    res.render('index', { title: 'Main Page', infoMarcas: brandValues }); // renderizamos el contenido necesario para la página principal

});

router.get('/formularioMarca', (req, res) => {
    const brandValues = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    res.render('form_marca', { title: 'Create your Own Brand', values: brandValues }); //renderizamos el contenido necesario para el formulario
});

router.post('/newBrand', (req, res) => {
    addBrand(req.body.nombreMarca, req.body.anoMarca, req.body.fundMarca, req.body.imgMarca, req.body.plaMarca);
    res.redirect(`/${req.body.nombreMarca}`);
});

router.post('/newRacket', (req, res) => {
    let marcaPrincipal = req.query.name;
    addRacket(marcaPrincipal, req.body.nombrePala, req.body.precioPala, req.body.imagenPala);
    res.redirect(`/${marcaPrincipal}`);
});


router.get("/:brandName/edit", (req, res) => {
    let brandValues = getBrand(req.params.brandName); //asignamos a brandValues el valor de la marca que queremos mostrar
    let infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla

    res.render("form_marca", { ...brandValues, desplegable: infoDesplegable, title: "Edit:" }); //renderizamos el contenido necesario para la marca seleccionada
    // addBrand(req.body.nombreMarca, req.body.anoMarca, req.body.fundMarca, req.body.imgMarca, req.body.plaMarca);

});

router.get('/:brandName', (req, res) => {
    let brandValues = getBrand(req.params.brandName); //asignamos a brandValues el valor de la marca que queremos mostrar
    let infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    let palas = brandValues.brandRackets; //asignamos a palas el valor de las palas de la marca que queremos mostrar
    res.render('marca', { ...brandValues, desplegable: infoDesplegable, palasPrincipal: palas }); //renderizamos el contenido necesario para la marca seleccionada
});


export default router;

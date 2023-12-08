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



router.get('/:brandName', (req, res) => {
    let brandValues = getBrand(req.params.brandName); //asignamos a brandValues el valor de la marca que queremos mostrar
    const lista = Array.from(marcas.values()); //asignamos a lista el valor de todas las marcas
    res.render('marca', { title: 'Brand Page', marcaPrincipal: brandValues, infoMarcas: lista }); //renderizamos el contenido necesario para la marca seleccionada
});

// router.get('/createYourBrand', (req, res) => {
    
//         const filePath = path.join(__dirname, 'form_marca.html');
//         res.sendFile(filePath);
// });
        
  

router.post('/form', (req, res) => {
    addBrand(bName, bYear, bFundator, bImage, bPlayers);
    res.redirect("/");
});

export default router;

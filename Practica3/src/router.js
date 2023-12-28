import express from 'express';
import { __dirname } from '../dirname.js';
import marcas, { addBrand, brand } from "./brandsService.js";
import { getBrand } from './brandsService.js';
import { addRacket } from './brandsService.js';

const router = express.Router();

router.get('/', (req, res) => {
    const brandValues = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla 

    res.render('index', { title: 'Main Page', infoMarcas: brandValues }); // renderizamos el contenido necesario para la página principal

});

router.get('/formularioMarca', (req, res) => {
    const brandValues = Array.from(marcas.values()); // convertimos el mapa en un array de objetos
    res.json(brandValues); // enviamos los datos como JSON
});

/* $.ajax({
    url: '/formularioMarca',
    type: 'GET',
    success: function(response) {
        // Aquí puedes manejar la respuesta del servidor
        console.log(response);
    },
    error: function(error) {
        // Aquí puedes manejar los errores
        console.log(error);
    }
}); */


router.post('/newBrand', (req, res) => {
    let errorMessage = '';

    if (!req.body.nombreMarca) {
        errorMessage += 'Nombre de la marca no proporcionado. ';
    }
    if (!req.body.anoMarca) {
        errorMessage += 'Año de la marca no proporcionado. ';
    }
    if (!req.body.fundMarca) {
        errorMessage += 'Fundación de la marca no proporcionada. ';
    }
    if (!req.body.imgMarca) {
        errorMessage += 'Imagen de la marca no proporcionada. ';
    }
    if (!req.body.webMarca) {
        errorMessage += 'Web de la marca no proporcionada. ';
    }
    if (!req.body.plaMarca) {
        errorMessage += 'Plataforma de la marca no proporcionada. ';
    }

    if (errorMessage) {
        res.render('form_marca', { error: `No se ha podido crear la marca por el siguiente motivo:  ${errorMessage}` })
    } else {
        addBrand(req.body.nombreMarca, req.body.anoMarca, req.body.fundMarca, req.body.imgMarca, req.body.webMarca, req.body.plaMarca);
        res.redirect(`/${req.body.nombreMarca}`);
    }
});

router.post('/newRacket', (req, res) => {
    let brandValues = getBrand(req.query.name); //asignamos a brandValues el valor de la marca que queremos mostrar
    let infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    let palas = brandValues.brandRackets; //asignamos a palas el valor de las palas de la marca que queremos mostrar
    let marcaPrincipal = req.query.name;
    let errorMessage = '';

    if (!req.body.nombrePala) {
        errorMessage += 'Nombre de la pala no proporcionado. ';
    }
    if (!req.body.precioPala) {
        errorMessage += 'Precio de la pala no proporcionado. ';
    }
    if (!req.body.imagenPala) {
        errorMessage += 'Imagen de la pala no proporcionada. ';
    }
    if (!req.body.palaUnits) {
        errorMessage += 'Número de unidades no proporcionado. ';
    }
    if (errorMessage) {
        res.render('marca', { error: `No se ha podido crear la marca por el siguiente motivo:  ${errorMessage}`, ...brandValues, desplegable: infoDesplegable, palasPrincipal: palas })
    } else {
        addRacket(marcaPrincipal, req.body.nombrePala, req.body.precioPala, req.body.imagenPala, req.body.palaUnits);
        res.redirect(`/${marcaPrincipal}`);
    }

});

router.post("/editBrand", (req, res) => {
    let brandValues = getBrand(req.query.name); //asignamos a brandValues el valor de la marca que queremos mostrar
    marcas.delete(req.query.name);
    brandValues.brandName = req.body.nombreMarca;
    brandValues.brandYear = req.body.anoMarca;
    brandValues.brandFounder = req.body.fundMarca;
    brandValues.brandImage = req.body.imgMarca;
    brandValues.brandWeb = req.body.webMarca;
    brandValues.brandPlayers = req.body.plaMarca;
    marcas.set(req.body.nombreMarca, brandValues);
    res.redirect(`/${req.body.nombreMarca}`);
});

router.get("/:brandName/edit", (req, res) => {
    let brandValues = getBrand(req.params.brandName); //asignamos a brandValues el valor de la marca que queremos mostrar
    let infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    res.render("form_marca", { ...brandValues, desplegable: infoDesplegable, title: "Edit:", action: `/editBrand?name=${req.params.brandName}` }); //renderizamos el contenido necesario para la marca seleccionada
});


router.get('/:brandName', (req, res) => {
    let brandValues = getBrand(req.params.brandName); //asignamos a brandValues el valor de la marca que queremos mostrar
    let infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    let palas = brandValues.brandRackets; //asignamos a palas el valor de las palas de la marca que queremos mostrar
    res.render('marca', { ...brandValues, desplegable: infoDesplegable, palasPrincipal: palas }); //renderizamos el contenido necesario para la marca seleccionada
});

router.get("/:brandName/confirmDelete", (req, res) => {
    let brandValues = getBrand(req.params.brandName); //asignamos a brandValues el valor de la marca que queremos mostrar
    let infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    res.render("confirmDelete", { ...brandValues, desplegable: infoDesplegable, title: "Confirm Delete" }); //renderizamos el contenido necesario para la marca seleccionada
});

router.get("/:brandName/deleteBrand", (req, res) => {
    console.log(req.query.name);
    marcas.delete(req.query.name);
    res.redirect("/");
});


export default router;

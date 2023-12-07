import express from 'express';
import { __dirname } from './dirname.js';
import marcas from "./src/brandsService.js";
import { getBrand } from './src/brandsService.js';
import { addBrand } from './src/brandsService.js';
import {brand} from './src/brandsService.js';
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "Main Page"
    });
});

/* router.get('/form_marca.html', (req, res) => {
    res.render('brandForm', {
        brandName: req.query.brand,
        owner: req.query.owner,
        year: req.query.year,
        image: req.query.urlLogo,
        color: req.query.brandColor,
    });
}); */

/* router.post('/submitForm', (req, res) => {
    res.render('prueba', {
        brandName: req.body.brand,
        owner: req.body.owner,
        year: req.body.year,
        image: req.body.urlLogo,
        color: req.body.brandColor,
    });
}); */

router.post('/submitForm', (req, res) => {
    const formData = req.body;
    res.render('prueba', formData);
});

router.get('/marca/:brandname', (req, res) => {
    let brandName = req.params.brandname;
    let brandInfo = getBrand(brandName);
    res.render("marca", brandInfo);
});


//intento de link form
router.post('/prueba', (req, res) => {
    
    let brand = new brand(brandName, brandYear, brandFundator, brandImage, brandPlayers);
    const brandName = req.body.brandName;
    const brandYear = req.body.brandYear;
    const brandFundator = req.body.brandFundatotr;
    const brandImage = req.body.brandImage;
    const brandPlayers = req.body.brandPlayers;
   
    addBrand(brandName, brandYear, brandFundator, brandImage, brandPlayers);

    res.render('marca', {
        brandName: req.body.brandName,
        brandYear: req.body.brandYear,
        brandFundatotr: req.body.brandFundatotr,
        brandImage: req.body.brandImage,
        brandPlayers: req.body.brandPlayers,
    });
    
    
});


export default router;

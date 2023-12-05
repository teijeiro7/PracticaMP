import express from 'express';
import { __dirname } from './dirname.js';
import marcas from "./src/brandsService.js";
import { getBrand } from './src/brandsService.js';
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


export default router;

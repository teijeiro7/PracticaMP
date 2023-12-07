import express from 'express';
import { __dirname } from './dirname.js';
import marcas from "./src/brandsService.js";
import { getBrand} from './src/brandsService.js';
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "Main Page"
    });
});

router.get('/marca/:brandname', (req, res) => {
    let brandName = req.params.brandname;
    let brandInfo = getBrand(brandName);
    res.render("marca", brandInfo);
});

router.get('/marca/:brandname', (req, res) => {
    let brandName = req.params.brandname;
    let brandInfo = getBrand(brandName);
    res.render("marca", brandInfo);
});

router.get('/createYourBrand', (req, res) => {
    let 
});


export default router;

class brand {
    constructor(name, year, fundator, image) {
        this.name = name;
        this.year = year;
        this.fundator = fundator;
        this.image = image;
    }
}

let nox = new brand("Nox", 2009, "Jesus Ballvé", "https://www.setpointchile.cl/cdn/shop/collections/3.png?v=1675371060");
let siux = new brand("Siux", 2012, "Antonio", "hbfyvgrbybvy");
let bullpadel = new brand("Bullpadel", 1995, "Jorge García Caballero", "hbfyvgrbybvy");
let kuikma = new brand("Kuikma", 2019, "Jorge García Caballero", "hbfyvgrbybvy");
let babolat = new brand("Babolat", 1875, "Pierre Babolat", "hbfyvgrbybvy");
let adidas = new brand("Adidas", 2013, "Juanma", "hbfyvgrbybvy");
let starvie = new brand("Starvie", 2002, "Rafa", "hbfyvgrbybvy");
let head = new brand("Head", 1960, "Rafa", "hbfyvgrbybvy");


let marcas = new Map();
marcas.set("nox", nox);
marcas.set("siux", siux);
marcas.set("adidas", adidas);
marcas.set("babolat", babolat);
marcas.set("starvie", starvie);

export function getBrand(brandName) {
    return marcas.get(brandName);
}

export default marcas;
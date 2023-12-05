class brand {
    constructor(name, year, colaborator, image) {
        this.name = name;
        this.year = year;
        this.colaborator = colaborator;
        this.image = image;
    }
}

let nox = new brand("Nox", 2000, "Jesus", "hbfyvgrbybvy");
let siux = new brand("Siux", 2010, "Antonio", "hbfyvgrbybvy");
let adidas = new brand("Adidas", 2001, "Juanma", "hbfyvgrbybvy");
let babolat = new brand("Babolat", 2002, "Samuel", "hbfyvgrbybvy");
let starvie = new brand("Starvie", 2003, "Rafa", "hbfyvgrbybvy");


let marcas = new Map();
marcas.set("nox", nox);
marcas.set("siux", siux);
marcas.set("adidas", adidas);
marcas.set("babolat", babolat);
marcas.set("starvie", starvie);

console.log(marcas);

export default marcas;
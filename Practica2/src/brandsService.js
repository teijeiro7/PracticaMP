export class brand {
    constructor(brandName, brandYear, brandFounder, brandImage, brandPlayers) {
        this.brandName = brandName;
        this.brandYear = brandYear;
        this.brandFounder = brandFounder;
        this.brandImage = brandImage;
        this.brandPlayers = brandPlayers;
    }
}

let nox = new brand("Nox", 2009, "Jesus Ballvé", "https://www.setpointchile.cl/cdn/shop/collections/3.png?v=1675371060", " Miguel Lamperti, Agustín Tapia");
let siux = new brand("Siux", 2012, "Marcos Sánchez", "https://palasdepadel10.com/wp-content/uploads/2018/10/SIUX-palas-padel-300.jpg", "Franco Stupaczuk, Cristian Gutiérrez");
let bullpadel = new brand("Bullpadel", 1995, "Jorge García Caballero", "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_256,pg_1,t_base_params,w_256/v1489071634/avatars/000/132/519/132519-original.jpg?1489071634", "Maxi Sanchez)");
let babolat = new brand("Babolat", 1875, "Pierre Babolat", "https://www.zonadepadel.es/c/97-category_header_pic/palas-de-padel-babolat.jpg", "Juan Lebrón");
let adidas = new brand("Adidas", 2013, "Adi Dassler", "https://images-na.ssl-images-amazon.com/images/S/abs-image-upload-na/0/AmazonStores/A1RKKUPIHCS9HS/8f698bd583b2fa7aad66912c988d2a17.w800.h800.jpg", "Alejandro Galán");
let starvie = new brand("Starvie", 2002, "Jorge Gómez de la Vega y Javier de la Chica", "https://www.elcorteingles.es/centroscomerciales/uploads/brand/logo/4903/STARVIE.png", "Javi Garrido");
let head = new brand("Head", 1960, "Howard Head", "https://fraguru.com/mdimg/dizajneri/o.4945.jpg", "Arturo Coello");
let dunlop = new brand("Dunlop", 1909, "John Boyd Dunlop", "https://federacionnavarradepadel.com/wp-content/uploads/2022/08/485fc0213bd8b8df4ffe0264be4418a5.jpg", "Ramiro Moyano");
let royal = new brand("Royal Padel", 1991, "Francisco Mendoza", "https://blog.streetpadel.com/wp-content/uploads/logo-marca-451.jpg", "Fede Chingotto");

let marcas = new Map();
marcas.set("Nox", nox);
marcas.set("Siux", siux);
marcas.set("Bullpadel", bullpadel);
marcas.set("Babolat", babolat);
marcas.set("Adidas", adidas);
marcas.set("Starvie", starvie);
marcas.set("Head", head);
marcas.set("Dunlop", dunlop);
marcas.set("Royal", royal);


export function getBrand(brandName) {
    return marcas.get(brandName);
}

export function editBrand(brandName, brandYear, brandFounder, brandImage, brandPlayers) {
    marcas.get(brandName);
    marcas.brandName = brandName;
    marcas.brandYear = brandYear;
    marcas.brandFounder = brandFounder;
    marcas.brandImage = brandImage;
    marcas.brandPlayers = brandPlayers;
    return brand;
}

export function addBrand(brandName, brandYear, brandFounder, brandImage, brandPlayers) {
    let brand = new brand(brandName, brandYear, brandFounder, brandImage, brandPlayers);
    marcas.set(brandName, brand);
    return brand;
}

export function deleteBrand(brandName) {
    marcas.delete(brandName);
    return marcas;
}


export default marcas;
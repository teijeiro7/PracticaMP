class brand {
    constructor(name, year, fundator, image, players) {
        this.name = name;
        this.year = year;
        this.fundator = fundator;
        this.image = image;
        this.players = players;
    }
}

let nox = new brand("Nox", 2009, "Jesus Ballvé", "https://www.setpointchile.cl/cdn/shop/collections/3.png?v=1675371060", " Miguel Lamperti, Agustín Tapia");
let siux = new brand("Siux", 2012, "Marcos Sánchez", "https://palasdepadel10.com/wp-content/uploads/2018/10/SIUX-palas-padel-300.jpg", "Franco Stupaczuk, Cristian Gutiérrez");
let bullpadel = new brand("Bullpadel", 1995, "Jorge García Caballero", "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_256,pg_1,t_base_params,w_256/v1489071634/avatars/000/132/519/132519-original.jpg?1489071634", "Paquito Navarro, Martin Di Nenno");
let kuikma = new brand("Kuikma", 2019, "Decathlon", "data:image/png;base64,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", "Maxi Sanchez)");
let babolat = new brand("Babolat", 1875, "Pierre Babolat", "https://www.zonadepadel.es/c/97-category_header_pic/palas-de-padel-babolat.jpg", "Juan Lebrón");
let adidas = new brand("Adidas", 2013, "Adi Dassler", "https://images-na.ssl-images-amazon.com/images/S/abs-image-upload-na/0/AmazonStores/A1RKKUPIHCS9HS/8f698bd583b2fa7aad66912c988d2a17.w800.h800.jpg", "Alejandro Galán");
let starvie = new brand("Starvie", 2002, "Jorge Gómez de la Vega y Javier de la Chica", "https://www.elcorteingles.es/centroscomerciales/uploads/brand/logo/4903/STARVIE.png", "Javi Garrido");
let head = new brand("Head", 1960, "Howard Head", "https://qph.cf2.quoracdn.net/main-qimg-4ea4ea5e998b3d2e4c77b88439ac9661", "Arturo Coello");
let dunlop = new brand("Dunlop", 1909, "John Boyd Dunlop", "https://federacionnavarradepadel.com/wp-content/uploads/2022/08/485fc0213bd8b8df4ffe0264be4418a5.jpg", "Ramiro Moyano");
let royal = new brand("Royal Padel", 1991, "Francisco Mendoza", "https://blog.streetpadel.com/wp-content/uploads/logo-marca-451.jpg", "Fede Chingotto");

let marcas = new Map();
    marcas.set("nox", nox);
    marcas.set("siux", siux);
    marcas.set("bullpadel", bullpadel);
    marcas.set("kuikma", kuikma);
    marcas.set("babolat", babolat);
    marcas.set("adidas", adidas);
    marcas.set("starvie", starvie);
    marcas.set("head", head);
    marcas.set("dunlop", dunlop);
    marcas.set("royal", royal);


export function getBrand(brandName) {
    return marcas.get(brandName);
}

export default marcas;
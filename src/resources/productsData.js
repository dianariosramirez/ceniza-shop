// Images
import raiz from "./images/raiz-11.png";
import recuerdame from "./images/recuerdame-2.png";
import hakuna from "./images/hm-1.png";
import atardecer from "./images/atardecer-1.png";
import ocaso from "./images/ocaso1.png";
import oasis from "./images/oasis-1.png";
import dias from "./images/diasrosas-1.png"
import paquete1 from "./images/paq1.png";
import paquete2 from "./images/paq1-1.png";
import cupCat from "./images/prod-cupcat.png";
import cupCat2 from "./images/prod-cupcat2.png";
import cupGreen from "./images/prod-cupgreen.png";


// Tizanas data

export const tizanas = [
    {
        id: "recuerdame",
        name: "Recuérdame",
        price: `$${169}.00`,
        image: recuerdame,
        type: "Tizana de temporada",
        info: `Ingredientes: Manzana, piña, 
            guayaba, tejocote, mandarina, pasas,
            flor de cempasúchil, canela.`,
        capacity: "12 tazas de 240 ml"
    },
    {
        id: "hakuna-matata",
        name: 'Hakuna Matata',
        price: `$${140}.00`,
        image: hakuna,
        type: "Tizana frutal",
        info: `Ingredientes: Piña, manzana, mango,
            maracuyá, pétalos de rosa`,
        capacity: "12 tazas de 240 ml"
    },
    {
        id: "atardecer",
        name: 'Atardecer',
        price: `$${149}.00`,
        image: atardecer,
        type: "Tizana frutal",
        info: `Ingredientes: Manzana, jamaica, canela,
            pasas, fresas, arándanos, bugambilia,
            almendras, lavanda`,
        capacity: "12 tazas de 240 ml"
    },
    {
        id: "raiz",
        name: 'Raiz',
        price: `$${135}.00`,
        image: raiz,
        type: "Tizana frutal",
        info: `Ingredientes: Piña, manzana, guayaba,
            naranja, jengibre, nuez, cáscara de naranja,
            pétalos de rosa.`,
        capacity: "12 tazas de 240 ml"
    },
    {
        id: "ocaso",
        name: 'Ocaso',
        price: `$${98}.00`,
        image: ocaso,
        type: "Tizana frutal",
        info: `Ingredientes: Bugambilia, cáscaras de cítricos,
            hierbabuena, cedrón, fresa, cáscara de mango, 
            lavanda, jengibre.`,
        capacity: "15 tazas de 240 ml"
    },
    {
        id: "oasis",
        name: 'Oasis',
        price: `$${85}.00`,
        image: oasis,
        type: "Tizana herbal",
        info: `Ingredientes: Hoja de limón, bugambilia,
            eneldo, cáscara de naranja, guayaba, hojas de guayaba.`,
        capacity: "15 tazas de 240 ml"
    },
    {
        id: "dias-rosas",
        name: 'Días rosas',
        price: `$${90}.00`,
        image: dias,
        type: "Tizana de temporada",
        info: `Ingredientes: Eneldo, naranja, cáscara de 
            naranja, jamaica, pericón, cúrcuma, pimienta negra,
            orégano de monte.`,
        capacity: "15 tazas de 240 ml"
    }
]

// Paquetes data

export const paquetes = [
    {
        id: "kit-navideño",
        name: 'Kit navideño',
        price: `$${9}.00`,
        image: paquete1,
    },
    {
        id: "kit-2",
        name: 'Kit 2',
        price: `$${9}.00`,
        image: paquete2,
    }
]

//Accesorios data

export const accesorios = [
    {
        id: "vaso-meowblack",
        name: 'Vaso Meow Black',
        price: `$${9}.00`,
        image: cupCat,
    },
    {
        id: "vaso-meow",
        name: 'Vaso Meow',
        price: `$${9}.00`,
        image: cupCat2,
    },
    {
        id: "vaso-green",
        name: "Vaso Green",
        price: `$${9}.00`,
        image: cupGreen,
    },
]
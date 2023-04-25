import data from "./data.js";
import dom from "./dom.js";

const URL = 'https://restcountries.com/v3.1/all';

const html = document.querySelector("html");

const datos = await data.getData(URL);


const darkBtn = document.querySelector("#switch");


darkBtn.addEventListener("click", () => {
    html.dataset.bsTheme = html.dataset.bsTheme === "light" ? "dark" : "light";
})

const darkBtn2 = document.querySelector("#switch2");


darkBtn2.addEventListener("click", () => {
    html.dataset.bsTheme = html.dataset.bsTheme === "light" ? "dark" : "light";

})


const products = dom.$('#paises');

datos.forEach(element => {
    const card = dom.newCard(element);

    products.appendChild(card);
})


const canva = dom.$("#nuevo");
datos.forEach(element => {
    const card = dom.newCard2(element);
    canva.appendChild(card);
   
});

const searchProduct = dom.$('#search');

searchProduct.addEventListener('keyup', () => {
  let filtro = searchProduct.value;

  const filtered = filtro === '' ? datos : data.filterByCountry(datos, filtro); 

  dom.showCards(filtered);

  const offcanvas= [...dom.$('#paises').children];
    offcanvas.forEach(elem => {
    elem.addEventListener ('click', () => {
        
        let filtro = ''
        filtro = event.target.textContent;
        const filteredcanvas = filtro == "" ? filtered  : data.showCanvas(filtered, filtro)
        dom.showCards2(filteredcanvas); 
    })
})

})

    const offcanvas= [...dom.$('#paises').children];
    offcanvas.forEach(elem => {
    elem.addEventListener ('click', () => {
        
        let filtro = ''
        filtro = event.target.textContent;
        const filtered = filtro == "" ? datos  : data.showCanvas(datos, filtro)

        dom.showCards2(filtered); 
    })
})




const regiones = data.filterByRegion(datos);

dom.regions(regiones);

const catList  = [...dom.$('#regiones').children];
let catActive = 0;


catList.forEach((busqueda, index) => {
    busqueda.addEventListener('click', () => {
        if (busqueda.classList.contains('act-categorie')) return ;

        busqueda.classList.add('act-categorie');
        let old = catList[catActive];

        old.classList.remove('act-categorie');

        catActive = index;

        let filtro = busqueda.textContent;

        const filtered = filtro === "All" ? datos : data.filtrar(datos, filtro);

        dom.showCards(filtered);



        const offcanvas= [...dom.$('#paises').children];
        offcanvas.forEach(elem => {
         elem.addEventListener ('click', () => {
        

        let filtro = ''
        filtro = event.target.textContent;
        const filteredcanvas = filtro == "" ? filtered  : data.showCanvas(filtered, filtro)

        dom.showCards2(filteredcanvas); 
    })
})

       
    })
});
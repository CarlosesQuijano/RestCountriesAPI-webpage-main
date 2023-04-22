import data from "./data.js";
import dom from "./dom.js";

const URL = 'https://restcountries.com/v3.1/all';

const html = document.querySelector("html");

const datos = await data.getData(URL);


const darkBtn = document.querySelector("#switch");

darkBtn.addEventListener("click", () => {
    html.dataset.bsTheme = html.dataset.bsTheme === "light" ? "dark" : "light";
})



const products = dom.$('#paises');

datos.forEach(element => {
    const card = dom.newCard(element);

    products.appendChild(card);
})


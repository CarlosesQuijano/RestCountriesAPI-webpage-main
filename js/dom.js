const $ = (selector) => document.querySelector(selector);

const newE = tag => document.createElement(tag);

const newCard = (obj) => {
  const div = newE('div');
  div.className = 'cards';
  
  div.innerHTML = `
  <div class="cards" >
      <div class="img2">
          <img class="rounded-2" src="${obj.flags.png}" alt="">
       </div>
          <div class="card-body">
    <h5 class="card-title" "btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" >${obj.name.common}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Population: ${obj.population}</li>
    <li class="list-group-item">Region: ${obj.region}</li>
    <li class="list-group-item">Capital: ${obj.capital}</li>
  </ul>
  <div class="card-body">

  </div>
          
    </div>
  `
  return div
}

const newCard2 = (obj) => {
  const div = newE('div');
  div.className = 'contenedor-pricipal';
  
  div.innerHTML = `
              <img src="${obj.flags.png}" alt="">
              <li class="list-group-item"><b>Pais principal:</b> ${obj.name.common}</li>
              <li class="list-group-item">Native Name: </li>
              <li class="list-group-item">Population: ${obj.population} </li>
              <li class="list-group-item">Region: ${obj.region} </li>
              <li class="list-group-item">Sub Region: ${obj.subregion} </li>
              <li class="list-group-item">Capital: ${obj.capital} </li>
              <div class="caja2">
              <li class="list-group-item">Top Level Domain: ${obj.tld}</li>
              <li class="list-group-item">Currencies:Euro</li>
              <li class="list-group-item">Languages:Eng</li>
            </div>
           </div>
  `
  return div
}


const showCards = (arr) => {

  paises.innerHTML = '';

  arr.forEach( element => {
    // Creamos el card con la informacion del elemento
    const card = newCard(element);
  
    // Agregamos el card al elemento products
    paises.appendChild(card);
  })
}
const showCards2 = (arr) => {

  nuevo.innerHTML = '';

  arr.forEach( element => {
    // Creamos el card con la informacion del elemento
    const card = newCard2(element);
  
    // Agregamos el card al elemento products
    nuevo.appendChild(card);
  })
}
const regions = (regions) => {
  const list = $('#regiones');

  regions.forEach( elem => {
    const li = newE('li');
    li.className = `text-nowrap pointer py-1 px-3 rounded-3 c-vl-pink ${elem === 'All' ? 'act-categorie' : '' }`; //condiciono la clase act-categorie solo para el elemento 'All'

    li.innerHTML = elem;

    list.appendChild(li);
  })

}

export default {
   $,
  showCards,
 newCard,
 regions,
 newCard2,
 showCards2,
}



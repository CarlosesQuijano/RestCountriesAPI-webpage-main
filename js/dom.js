const $ = (selector) => document.querySelector(selector);


const newCard = (obj) => {
  const div = document.createElement('div');
  div.className = 'cards';
  

  div.innerHTML = `
  <div class="cards">
      <div class="img2">
          <img class=" rounded-2" src="${obj.flags.png}" alt="">
       </div>
          <div class="card-body">
    <h5 class="card-title">${obj.name.common}</h5>
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
const showCards = (arr) => {

  products.innerHTML = '';

  arr.forEach( element => {
    // Creamos el card con la informacion del elemento
    const card = newCard(element);
  
    // Agregamos el card al elemento products
    products.appendChild(card);
  })
}


export default {
   $,
  showCards,
 newCard,
}
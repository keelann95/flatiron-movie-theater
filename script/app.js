const apiUrl = "http://localhost:3000/films";



//add shortcut functions
function createAnElement(element) {
  return document.createElement(element);
}

function addText(element, text) {
  return (element.innerText = text);
}

function listen(element, event, callback) {
  return element.addEventListener(event, callback);
}

function select(selector) {
  return document.querySelector(selector);
}

function appendChild(child, parent) {
  return parent.appendChild(child);
}

function addAttribute(element, attribute, content) {
  return element.setAttribute(attribute, content);
}

function removeAttribute(element, attribute) {
  return element.removeAttribute(attribute);
}

//using above functions to manipulate dom

//fetching on the Menu side 

function menuside() {
    
listen(document, "DOMContentLoaded", () => {
    fetch(apiUrl);
  });
  
  
  
  // Getting the data
  fetch(apiUrl)
    .then((res) => res.json())
    .then((films) => {
      films.forEach((film) => createFilms(film));
    });
  
  // Creating posters of the films
  function createFilms(film) {
      const divCard = document.querySelector(".cards");
      const filmCard = document.createElement("div");
      //adding a class to style film card
      filmCard.classList.add("filmCard");
      const html = `
      <div> 
        <div  class="filmPoster"> 
          <a href="" class="card"><img src="${film.poster}" alt="" class="smallPoster"></a>
        </div>
        <div class="filmTitle">
          <h3>${film.title}</h3>
        </div>
     </div>
      `;
    
      // Append each film's HTML to divCard
      filmCard.innerHTML = html;
      divCard.appendChild(filmCard);
    }
    
}
menuside()

//fetching on the Other side
function otherSide() {

const filmCardContainer = select('#filmCardContainer')


listen(document, "DOMContentLoaded", () => {
  fetctData(apiUrl)
});

function fetctData(apiUrl) {
    // Getting the data
fetch(apiUrl)
.then((res) => res.json())
.then((films) => {
  createCards(films);
});
}





function createCards(filmData){
  filmCardContainer.innerHTML = "";


filmData.forEach((film) => {
  const Card = createAnElement("div");
  addAttribute(Card, "class", "Card");

  const filmImage = createAnElement("img");
  addText(filmImage, film.poster);
  addAttribute(filmImage, "class", "img");
  addAttribute(filmImage, "alt", film.title);
  addAttribute(filmImage, "src", film.poster);
  appendChild(filmImage, Card);


  const name = createAnElement('h3');
  addText(name,'Title:   ' + film.title);
  appendChild(name,  Card);

const runTime = createAnElement('time')
addText(runTime, 'runtime:  ' + film.runtime)
appendChild(runTime, Card)

const showTime = createAnElement('time')
addText(showTime, 'showtime:  ' + film.showtime)
appendChild(showTime, Card)


const button = createAnElement('button')
addAttribute(button, 'type', film.showtime)
addText(button, 'buy ticket')
appendChild(button, Card)


  appendChild(Card, filmCardContainer);





})}

}otherSide()



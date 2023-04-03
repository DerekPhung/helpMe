// action items for test
// you must create dynamic object (using class)
// create button that when click creates a page form (like a popup page)
// form must have 3 fields (hint: input) that would take in user's name, age, place
// create submit button on the form that when clicked would create an object base on the fields and 
// adds the object into the existing array (card) and
// the form will disappear letting user see the update


/**
 * name: Derek
 * date: 2/20/2023
 */

class Person{
  age;
  place;
  name;

  constructor(userAge, userPlace, userName){
    this.age = userAge;
    this.place = userPlace;
    this.name = userName;
  }
}

let cardList = [];

function webPage(){
  document.getElementById("bigBox").innerHTML = ``;
  loadFromLocalStorage();
  for(let i = 0; i < cardList.length; i++){
      document.getElementById("bigBox").innerHTML += `
      <div class="card">
          <div class="age">${cardList[i].age}</div>
          <div class="place">${cardList[i].place}</div>
          <div class="name">${cardList[i].name}</div>
      </div>
  `;
  }

  document.getElementById("bigBox").innerHTML += `
  <button id="popupButton" onclick="popupButton()">+</button>
`;

}

webPage();

function popupButton(){
  document.getElementById("bigBox").innerHTML +=`
    <div id="popupBox">
      <div>Age:<input type="number" id="ageInput"></input></div>
      <div>Place:<input type="text" id="placeInput"></input></div>
      <div>Name:<input type="text" id="nameInput"></input></div>
      <button onclick="addToArray()">Submit</button>
      <button onclick="clearAll()">Clear All</button>
    </div>
  `;
}

function addToArray(){
  let age = document.getElementById("ageInput").value;
  let place = document.getElementById("placeInput").value;
  let name = document.getElementById("nameInput").value;
  let object = new Person(age, place, name);
  
  cardList.push(object);
  saveToLocalStorage();
  webPage();
}



function clearAll(){
  localStorage.clear();
  cardList = [];
  webPage();
}

function loadFromLocalStorage(){
  if(JSON.parse(localStorage.getItem("objects")) == null){
    cardList = [
      {
         age: 2,
         place: "1st",
         name: "Mochi" 
      },
    
      {
          age: 16,
          place: "2nd",
          name: "Derek", 
       },
    
       new Person(21,"3rd","Annie")
    ];
  }

  else{
    cardList = JSON.parse(localStorage.getItem("objects"));
  }
  
}

function saveToLocalStorage(){
  localStorage.setItem("objects", JSON.stringify(cardList));
}




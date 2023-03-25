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

let cardList = [
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

function webPage(){
  document.getElementById("bigBox").innerHTML = ``;

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

console.log(cardList);

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
  

  localStorage.setItem("objects", JSON.stringify(object));
  let objectsData = JSON.parse(localStorage.getItem("objects"));

  console.log(objectsData);

  cardList.push(objectsData);

  console.log(localStorage);

  // cardList = localStorage;

  webPage();
}



function clearAll(){
  localStorage.clear();
  cardList = [];
  webPage();
}


// let colorsArray = ["blue", "green", "white"];
// localStorage.setItem("colors", JSON.stringify(colorsArray));

// let numbersArray = [1, 2, 3];
// localStorage.setItem("numbers", JSON.stringify(numbersArray));

// let colorsData = JSON.parse(localStorage.getItem("colors"));
// console.log(colorsData);

// let numbersData = JSON.parse(localStorage.getItem("numbers"));
// console.log(numbersData);

// localStorage.clear();

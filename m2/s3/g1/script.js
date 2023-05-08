/* ESERIZIO 1 */
class User{
    constructor (firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    static compareAge(a,b){
    if(a.age > b.age){
        return a.firstName + " is older than " + b.firstName;
    }
    else{
        return b.firstName + " is older than " + a.firstName;
    }
}
}
let x = new User('Simone', 'Aiello', 25, 'Milano');
let y = new User('Sergio', 'Mattarella', 81, 'Palermo');
console.log(User.compareAge(x,y));
console.log(y);

/* ESERIZIO 2 */
let petName = document.querySelector('.pet-name')
let ownerName = document.querySelector('.owner')
let species = document.querySelector('.form-select')
let breed = document.querySelector('.razza')
let pets = [] 

class Pets {
  constructor(name, owner, species, breed) {
    this.name = name
    this.owner = owner
    this.species = species
    this.breed = breed
  }
  static compareNames = function (user1, user2) {
    return user1.owner === user2.owner
  }
}


const createList = function () {
    let listReference = document.querySelector('#users-list')
    listReference.innerHTML = ''
    pets.forEach((pet, i) => {
      let newListItem = document.createElement('li')
      newListItem.innerText =pet.name +' è un bellissimo ' + pet.species + ' ' + pet.breed +', di proprietà di ' + pet.owner 
      listReference.appendChild(newListItem)
    })
  }
  
  let formReference = document.querySelector('form')
  formReference.addEventListener('submit', (e) => {
    e.preventDefault() 
    let petFromTheForm = new Pets(petName.value, ownerName.value, species.value, breed.value)
    pets.push(petFromTheForm)
    petName.value = '' 
    ownerName.value = '' 
    species.value = ''
    breed.value = ''
    createList()
  })
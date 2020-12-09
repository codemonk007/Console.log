const person = {
    name: "Leonardo"
};
let animal = {
    species: "snake"
};
person.name = "Ganapati" 
console.log(person);

let person = {
    name: "Leonardo"
};
let animal = {
    species: "snake"
};
Object.freeze(person);
person.name = "Lima"; //TypeError: Cannot assign to read only property 'name' of object
console.log(person);

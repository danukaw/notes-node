console.log("starting json");

/* let personObj = {
    name : 'danuka',
    age : 33,
    occupation : 'Software engineer'
};

console.log(typeof personObj);

let personString = JSON.stringify(personObj);

console.log(typeof personString);
console.log(" PersonString ", personString);

let placesStr = '{"name" : "kubuk sevena", "location" : "Kithulgala"}';
console.log(typeof placesStr);
console.log(placesStr);

let placessObj = JSON.parse(placesStr);
console.log(typeof placessObj);
console.log(placessObj); */

let fs = require('fs');

let originalPlaces = {
    name : "Kubuksewena",
    location : "Kithulgala"
};

let originalPlacesStr = JSON.stringify(originalPlaces);

fs.writeFileSync('places.json', originalPlacesStr, ()=> {

});

//fs.writeFileSync('places.json', placesStr);
let result = fs.readFileSync('places.json', () => {
    
});
console.log(typeof result);

let resultObj = JSON.parse(result);
console.log(typeof resultObj);
console.log(resultObj.name, " and location ", resultObj.location);





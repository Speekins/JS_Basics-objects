//Write code that stores all of the vehicle property names in an array called keys.

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

/*let keys = Object.assign(vehicle);

console.log(keys);*/

let keys = [];

for (let property in vehicle) {
  keys.push(property);
}
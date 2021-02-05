//Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let person = Object.fromEntries(nestedArray);

let newPerson = [];

nestedArray.forEach(subArray => {
  newPerson[subArray[0]] = subArray[1];
})

console.log(person);
console.log(newPerson);


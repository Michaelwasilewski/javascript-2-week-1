// how to convert js to JSON


const person = {
    name: 'Ola Nordmann',
    id: 9,
    isAdmin: true,
  };
  
const personJSON = JSON.stringify(person);
  
console.log(personJSON);
// Logs:
// {"name":"Ola Nordmann","id":9,"isAdmin":true}


const userDetails = {
  Name: "Michael",
  Age: "28",
  isBoss: true,
};
const userDetailsJSON = JSON.stringify(userDetails);
console.log("userDetails JS Format",userDetailsJSON);
  
const userDataBackToJS = JSON.parse(userDetailsJSON);
console.log(userDataBackToJS);

// create a JSON data object and convert it to JS 


const otherPersonJSON = '{ "name": "Ola Nordmann", "id": 9, "isAdmin": true }';

const otherPerson = JSON.parse(otherPersonJSON);

console.log(otherPerson);
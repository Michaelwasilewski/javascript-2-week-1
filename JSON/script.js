const person = {
    name: 'Ola Nordmann',
    id: 9,
    isAdmin: true,
  };
  
  const personJSON = JSON.stringify(person);
  
  console.log(personJSON);
  // Logs:
  // {"name":"Ola Nordmann","id":9,"isAdmin":true}
  
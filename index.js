function submitData (name, email) {
   
}



const submitData = {
  name: "Ayse",
  email: "ayse@gmail.com"
};
 
const configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(submitData)
};
 
fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things!");
    console.log(error.message);
  });
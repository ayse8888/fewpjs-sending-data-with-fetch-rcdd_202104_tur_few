function submitData (name, email) {
fetch("http://localhost:3000/users", {
  
  
})
method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(submitData)
};
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
}
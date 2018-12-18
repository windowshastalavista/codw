// JavaScript Document
function validateForm() {
  //getto i valori del form
  var username = $('#username').val();
  var password = $('#password').val();

  //getto l'array users e mi salvo la sua lunghezza
  var users = JSON.parse(localStorage.users);
  var l = users.length;

  //per ogni user dell'array
  var i;
  for (i = 0; i < l; i++) {
    //se le credenziali corrispondono
    if (users[i].u == username && users[i].p == password) {
      alert("utente trovato");
      location = "../homepage.html";
      return false;
    }

  }

  //altrimenti
  alert("utente non trovato trovato");
  location = "../registration.html";
  return false;

}
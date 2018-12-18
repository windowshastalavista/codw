// JavaScript Document

function message() {

  //se non esiste l'array users, lo creo ed inizializzo a vuoto
  if (typeof (localStorage.users) == "undefined") localStorage.users = "[]";

  //getto i valori dle form
  var username = $('#username').val();
  var password = $('#password').val();
  var confimPassword = $('#confimPassword').val();

  //controllo se le passowrd corrispondono
  if (password != confimPassword) {
    alert("passwords don't match");
    return true;
  }

  //creo l'oggetto user con i valori del form
  var user = {
    u: username,
    p: password
  };

  //mi getto l'array users dal local storage e la sua lunghezza
  var users = JSON.parse(localStorage.users);
  var l = users.length;

  //assengo all'ultima cella l'utente creato
  users[l] = user;

  //sovrascrivo l'array user con l'array aggiornato
  localStorage.users = JSON.stringify(users);


  var s = JSON.stringify(users[l].u);
  alert("user registred: " + s + "number: " + JSON.stringify(l));

  //pagina html di ritorno del form
  location = "../login.html";

  //non ritorna alla pagina del form
  return false;
}
// JavaScript Document

//funzione per caricare documento xml
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "../xml/equipaggiamenti.xml", true);
  xhttp.send();
}

//funzione per ottenere un array senza duplicati
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

//funzione che crea uan tabella, la popola con le infrmazioni di un xml e 
//la innerizza sul html che ha chiamato la funzione 
function myFunction(xml) {
  //get array con tutti tipi di arma del file xml
  var x, i, j, xmlDoc, arr, txt;
  xmlDoc = xml.responseXML;
  arr = [];
  x = xmlDoc.getElementsByTagName('equipaggiamento');

  for (i = 0; i < x.length; i++) {
    arr.push(x[i].getAttribute("tipo"));
  }

  //get array con solo i tipi di arma diversi
  var unique = arr.filter(onlyUnique);
  arr = unique;

  //creo la tabella
  txt = '<table></table>';
  //per ogni tipo di arma
  for (i = 0; i < arr.length; i++) {
    txt += '<tr>';
    txt += '<td class = "intestazione_tabella">' + arr[i] + '</td>';
    //per ogni arma nel documento xml immetto nella riga della tabella quelli che sono del tipo di arma corrente
    for (j = 0; j < x.length; j++) {
      if (x[j].getAttribute('tipo') == arr[i]) {
        txt += '<td><div  class="dropdown"><button onclick="myJQueryFunction(this);" class="dropbtn" id=' +
          x[j].getElementsByTagName("nome")[0].childNodes[0].nodeValue + '></button><div  class="dropdown-content">' +
          x[j].getElementsByTagName("descrizione")[0].childNodes[0].nodeValue + '</div></div></td>';
      }

    }
    txt += '</tr>';
  }

  //innerizzo tabella
  document.getElementById("demo").innerHTML = txt;

}


/*funzione per mstrare descrizione bottoni usando jQuery */
function myJQueryFunction(element) {
  var elements = ".dropdown-content";
  $(elements).removeClass('show');
  $(element).next(elements).toggleClass("show");
}

/* funzione per nascondere descrizione bottoni quando clicco fuori da un bottone */
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
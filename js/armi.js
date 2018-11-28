// JavaScript Document/* When the user clicks on the button, 
/* When the user clicks on the button, 
closes every dropdowns and open the only one passed as argument */
/* Pick the one you prefer, Javascript or jQuery… */

/*jQuery */
function myJQueryFunction(element) {
  var elements = ".dropdown-content";
  $(elements).removeClass('show');
  $(element).next(elements).toggleClass("show");
}

/* function to close the dropdown when clicked outside. */
/* quando clicco sulla finestra*/
window.onclick = function (event) {
  /* se non clicco su un bottone*/
  if (!event.target.matches('.dropbtn')) {
    /* nascondo gli elementi*/
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


function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "../xml/armi.xml", true);
  xhttp.send();
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function myFunction(xml) {
  //get tipi di arma
    var x, i, j, xmlDoc, arr, txt;
    xmlDoc = xml.responseXML;
    arr = [];
    x = xmlDoc.getElementsByTagName('arma');
  
    for (i = 0; i < x.length; i++) { 
        arr.push(x[i].getAttribute("tipo"));
    }
  
  var unique = arr.filter( onlyUnique );
  arr = unique;
  
  //ottengo la lista dei nodi di un tipo di arma
  txt='<table></table>';
  for (i = 0; i <arr.length; i++) {
    txt +='<tr>';
    txt +='<td>'+ arr[i] +'</td>';
       for (j = 0; j <x.length; j++) {
         if (x[j].getAttribute('tipo') == arr[i]) {
           txt+='<td><div  class="dropdown"><button onclick="myJQueryFunction(this);" class="dropbtn" id='+x[j].getElementsByTagName("nome")[0].childNodes[0].nodeValue +'></button><div  class="dropdown-content">'+x[j].getElementsByTagName("descrizione")[0].childNodes[0].nodeValue+'</div></div></td>';
         }
         
       }
    txt +='</tr>';
  }
  
  document.getElementById("demo").innerHTML = txt;
  
}






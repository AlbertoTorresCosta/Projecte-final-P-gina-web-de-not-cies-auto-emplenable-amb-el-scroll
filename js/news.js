function cargardoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("AutoEmplenable1").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "data/1.json", true);
  xhttp.send();
}

function cargardoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("AutoEmplenable2").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "data/2.json", true);
  xhttp.send();
}

$(document).ready(function(){
    $("boton").click(function(){
        alert($("div").scrollTop() + " px");
    });
});



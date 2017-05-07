/*function cargardoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("izquierda").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "data/1.json", true);
  xhttp.send();
}*/


$(function(){
    //cargar jsons
    $.getJSON("data/1.json", function(jsonObject) {
        ponerjson( jsonObject );
    });

    //onclick en verinfo
    $("#boton").click(function() {
        
        var v=$("#1").val();
        alert(v);
        if (v!=0) window.location = "/Titulo/"+$("#Cuerpo").val();
        else alert('Este es el contenido');
    });
});

function ponerjson(json){
     $.each( json, function( i, Titulo ) {
         /*$("#1").append( "<option value='" + Titulo.Cuerpo + "'>" + Cuerpo.Cuerpo + "</option>" );*/
         $("#1").append($('<option>', { value:1.Titulo, text : 1.Cuerpo }));
         //"slug" es la parte de la url, por si hay que visitar la página de la comunidad (no va con vuestro proyecto, es un ejemplo)
     /*}); 
}*/







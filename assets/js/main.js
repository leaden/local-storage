

function guardarDatos(){
	localStorage.nombre = document.getElemetById("nombre").value;
	localStorage.password = document.getElemetById("password").value;
}

function recuperarDatos(){
	if ((localStorage.nombre != undefined) && (localStorage.password != undefined)){
		document.getElemetById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
}
else{
	document.getElemetById("datos").innerHTML = "No has introducido tu nombre y tu password";
  }
}
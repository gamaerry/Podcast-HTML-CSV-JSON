//var d=[{'edad':'1','cm':'23','pais':'M','genero':'M','Q1':'10','Q2':'10'},{'edad':'2','cm':'34','pais':'M','genero':'M','Q1':'10','Q2':'10'},{'edad':'3','cm':'32','pais':'M','genero':'H','Q1':'10','Q2':'10'},]
var csv='https://docs.google.com/spreadsheets/d/e/2PACX-1vTkhr9IVTzNtQmAbvjTQLcX4W3AkqTza140u83ir7zbu59NaD2rqfrba4QSmvF8Os8HVmZzZ8bT_7rC/pub?output=csv'
var json= new Promise((resolve,reject)=>{
  Papa.parse(csv, {
    download: true,
    header: true,
    complete: function(resultados) {
    	resolve(resultados.data)
    }
  })
})
json.then( function(valor){construir(valor)} )
function construir(datos){
  // Preparacion de elementos:
  var tabla=document.getElementById('tabla')
  var lista=document.getElementById('lista')
  var titulo=document.getElementById('titulo')
  var fechaAutor=document.getElementById('fecha-autor')
  var player1=document.getElementById('player1')
  //LLenado de la portada:
  var fecha=datos[datos.length-1].Fecha.split('/')
  switch (fecha[1]) {
    case '1': fecha[1]='Enero'
      break;
    case '2': fecha[1]='Febrero'
      break;
    case '3': fecha[1]='Marzo'
      break;
    case '4': fecha[1]='Abril'
      break;
    case '5': fecha[1]='Mayo'
      break;
    case '6': fecha[1]='Junio'
      break;
    case '7': fecha[1]='Julio'
      break;
    case '8': fecha[1]='Agosto'
      break;
    case '9': fecha[1]='Septiembre'
      break;
    case '10': fecha[1]='Octubre'
      break;
    case '11': fecha[1]='Noviembre'
      break;
    default: fecha[1]='Diciembre'
  }
  titulo.innerHTML+=`Episodio ${datos[datos.length-1].Episodio}: ${datos[datos.length-1].Título}`
  fechaAutor.innerHTML+=`<span class="text-white-opacity-05"><small>Por Luis Gerardo | ${fecha[1]} ${fecha[2]} </small ></span>`
  player1.innerHTML+=`<source src="audio/${datos[datos.length-1].Título}.${datos[datos.length-1].Formato}" type="audio/${datos[datos.length-1].Formato}">`
  // Lista y tabla
  for (var i = 0; i < datos.length; i++) {
    //Llenado de la lista:
    lista.innerHTML+=`<li><a href="audio/${datos[i].Título}.${datos[i].Formato}">${datos[i].Episodio}. ${datos[i].Título}</a><\li>`
    //Llenado de la tabla:
    var descripcion= datos[i].Descripción
        .replace(/\*\*([^\*]+)\*\*/g,'<a href="$1" target="_blank">$1</a>')
        .replace(/\n/g,'<br>')
    tabla.innerHTML+=`
      <tr>
				<td>${datos[i].Episodio}</td>
				<td>${datos[i].Título}</td>
				<td>
				  <audio id="player2" preload="none" style="max-width: 100%">
					  <source src="audio/${datos[i].Título}${datos[i].Formato}">
				  </audio><br>
				  ${descripcion}
				</td>
				<td>${datos[i].Fecha}</td>
      </tr>`
  }
}

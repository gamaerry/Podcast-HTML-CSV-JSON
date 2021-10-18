construirIndex(episodiosJSON.data, queridoJSON.data[0].fondo)
function construirIndex(episodios, fondo){
  //Fondo a partir del csv
  document.getElementById('fondo').style.backgroundImage=`url(${fondo.replace(/^.*(?=images)/, '')})`

  // Preparacion de elementos:
  let tabla=document.getElementById('tabla')
  let lista=document.getElementById('lista')
  let titulo=document.getElementById('titulo')
  let fechaAutor=document.getElementById('fecha-autor')
  let player1=document.getElementById('player1')
  let fecha=episodios[episodios.length-1].fecha.split('/')

  //LLenado de la portada:
  titulo.innerHTML+=`Episodio ${episodios[episodios.length-1].episodio==0?"bonus":episodios[episodios.length-1].episodio}: ${episodios[episodios.length-1].titulo}`
  fechaAutor.innerHTML+=`<span class="text-white-opacity-05"><small>Por Luis Gerardo | ${mes(fecha[1])} ${fecha[2]} </small ></span>`
  player1.innerHTML+=`<source src="audio/${episodios[episodios.length-1].titulo}.${episodios[episodios.length-1].formato}" type="audio/${type(episodios[episodios.length-1].formato)}">`

  for (let i = 0; i < episodios.length; i++) {
    //Llenado de la lista:
    lista.innerHTML+=`<li><a href="audio/${episodios[i].titulo}.${episodios[i].formato}">${episodios[i].episodio}. ${episodios[i].titulo}</a><\li>`
    //Llenado de la tabla:
    tabla.innerHTML+=`
      <tr>
				<td>${episodios[i].episodio}.</td>
				<td>${formatoIMG(episodios[i].titulo,episodios[i].imagen)}</td>
				<td>
				  <audio id="player2" style="min-width: 100%">
					  <source src="audio/${episodios[i].titulo}.${episodios[i].formato}" type="audio/${type(episodios[i].formato)}">
				  </audio><br>
				  ${formatoHTML(episodios[i].descripcion)}
				</td>
				<td>${episodios[i].fecha}</td>
      </tr>`
  }
}
function mes(numero){
  switch (numero) {
    case '1': numero='Enero'
      break;
    case '2': numero='Febrero'
      break;
    case '3': numero='Marzo'
      break;
    case '4': numero='Abril'
      break;
    case '5': numero='Mayo'
      break;
    case '6': numero='Junio'
      break;
    case '7': numero='Julio'
      break;
    case '8': numero='Agosto'
      break;
    case '9': numero='Septiembre'
      break;
    case '10': numero='Octubre'
      break;
    case '11': numero='Noviembre'
      break;
    default: numero='Diciembre'
  }
  return numero
}
function type(formato){
  if (formato=='wav'||formato=='ogg') {
    return formato
  }else {
    return 'mpeg'
  }
}
function formatoHTML(descripcion){
  return descripcion
      .replace(/(^[^\s]+ [^\s]+:)/,'<span style="font-weight: bold">$1</span>') //ojo: aquí no es global
      .replace(/\*\*([^*]+)\*\*/g,'<a href="$1" target="_blank">$1</a>')
      .replace(/\n/g,'<br>')
}
function formatoIMG(titulo, imagen){
	return titulo
		.replace(/(.+)/, `$1 <br><img src="images/${imagen}" alt="¿Qué es el amor al propio país? ¿El odio a lo que no es el propio país? -Úrsula K. Le Guin" width="240" height="240">`)
}

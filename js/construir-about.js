construirAbout(queridoJSON.data)

function construirAbout(querido) {
	document.getElementById('descripcion').innerHTML +=
		`<img class="mx-auto d-block img-fluid" style="max-width:290px; border-top:15px solid transparent" src=${querido[0].portada} alt="logo ${querido[0].nombre}">
		<h1 class="container-fluid display-5 mt-4 mb-4 text-center text-black ">Descripción del podcast ${querido[0].nombre} </h1>
		<div class="container-fluid w-75 mb-4 text-center">
			${querido[0].descripcion.replace(/\n/g,'<br>')}
			<br>
		</div>`
	document.getElementById('fondo').style.backgroundImage = `url(${querido[0].fondo.replace(/^.*(?=images)/, '')})`
}

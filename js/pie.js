class Pie extends HTMLElement {
	connectedCallback() {
		crearPie(this, queridoJSON.data[0]) //solo existe un solo objeto (una sola linea en la bd)
	}
}
customElements.define('pie-pagina', Pie)

function crearPie(pie, querido) {
	//Todos los atributos de "querido" se usan sin procesar a excepción de:
	//fondo y xml (que son cortados por ser enlaces en el mismo servidor)
	//y descripción (que se corta hasta el primer punto)
	pie.innerHTML = `<div class="site-section">
		<div class="container">
			<div class="row mb-5">
				<div class="col-md-12 text-center">
					<h2 class="font-weight-bold text-black">Detrás del microfono: </h2>
				</div>
			</div>
			<div class="row">
				${colaboradores(querido.narradores)}
			</div>
		</div>
	</div>

	<div class="site-blocks-cover overlay inner-page-cover" style="background-image: url(${querido.fondo.replace(/^.*(?=images)/, '')});" data-stellar-background-ratio="0.5">
		<div class="container">
			<div class="row align-items-center justify-content-center text-center">
				<div class="col-md-6" data-aos-delay="400">
					<h2>Subscripción</h2>
					<p class="mb-5">Suscribete para recibir el contenido en tu correo: </p>
					<form action="#" method="post" class="site-block-subscribe">
						<div class="input-group mb-3">
							<input type="text" class="form-control border-secondary text-white bg-transparent" placeholder="Ingresar correo " aria-label="Ingresar correo" aria-describedby="button-addon2">
							<div class="input-group-append">
								<button class="btn btn-primary" type="button" id="button-addon2">¡PROXIMAMENTE!</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<footer class="site-footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-4">
					<div class="mb-5">
						<h3 class="footer-heading mb-4">Acerca de ${querido.nombre}</h3>
						<p>${querido.descripcion.replace(/([^.]+\.)[\s\S]*/, `$1`)}</p>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="row">
						<div class="col-md-6">
							<h3 class="footer-heading">Menú rapido</h3>
						</div>
						<div class="col-md-8 col-lg-8">
							<ul class="list-unstyled">
								<li><a href="index.html">Inicio</a></li>
								<li><a href="about.html">Acerca de nosotros</a></li>
								<li><a href=${querido.rss.replace(/.+\/([^.]+.xml)/, `$1`)} target="_blank">RSS</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div class="col-lg-4 ">
					<div class="mb-5">
						<h3 class="footer-heading mb-2">Suscripción</h3>
						<p>Suscribete para recibir el contenido en tu correo:</p>
						<form action="#" method="post">
							<div class="input-group mb-3">
								<input type="text" class="form-control border-secondary text-white bg-transparent" placeholder="Ingresar correo" aria-label="Ingresar correo" aria-describedby="button-addon2">
								<div class="input-group-append">
									<button class="btn btn-primary" type="button" id="button-addon2">¡PROXIMAMENTE!</button>
								</div>
							</div>
						</form>
					</div>
				</div>

				<div class="row pt-5 mt-5 text-center">
					<div class="col-md-12"></div>
				</div>
			</div>
		</div>
	</footer>`
}

function colaboradores(narradoresRaw) {
	//atributosJSON es un objeto (una pequeña bd) creado apartir del campo "narradores" del csv:
	atributosJSON = atributosBuilder(narradoresRaw)
	//Todos los colaboradores (narradores) en formato HTML:
	let colaboradoresHTML = ''
	console.log(atributosJSON.colaboradores);
	atributosJSON.colaboradores.forEach(narrador => colaboradoresHTML += `
		<div class="col-md-6 col-lg-4 mb-5 mb-lg-5">
			<div class="team-member" style="text-align: center;">
				<img src=${narrador.foto} class="img-fluid">
				<div class="text center-block text-center">
					<div class="mb-2 font-weight-light h4">${narrador.nombre}</div>
					<div class="d-block mb-2 text-white-opacity-05">${narrador.pais}</div>
					<div class="mb-4">${narrador.ocupacion}</div>
					${redSocial(narrador.social)}
					<a href="mailto:${narrador.correo}" target="_blank" class="text-white p-2"><span class="icon-envelope"></span></a>
				</div>
			</div>
		</div>`); //fin del foreach
	return colaboradoresHTML
}

function atributosBuilder(narradoresRaw) {
	//Separar todo el campo por narrador (por lo que el objeto narradores es un array):
	let narradores = narradoresRaw.split('), (').map(n => n.replace(/(^\()|(\),* *$)/g, ''))
	//Separar cada narrador por atributos (primero se crea un string que luego será convertido a un JSON):
	let atributosStr = '{ "colaboradores" : ['
	for (let i = 0, tmp = narradores[i].split(' | '); i < narradores.length; i++){
		tmp = narradores[i].split(' | ')
		atributosStr += `{"nombre":"${tmp[0]}", "foto":"${tmp[1]}", "pais":"${tmp[2]}", "ocupacion":"${tmp[3]}", "social":"${tmp[4]}", "correo":"${tmp[5]}"},`
	}
	return (JSON.parse(atributosStr.replace(/,$/, ']}'))) //el replace es para la ultima coma
}

function redSocial(social) {
	// (la palabra clave para ningúna red Social es cualquier palabra que no haga match ni con "facebook.com" ni "twitter.com")
	if (social.match(/facebook\.com/))
		return `<a href="https://${social}" target="_blank" class="text-white p-2"><span class="icon-facebook"></span></a>`
	else if (social.match(/twitter\.com/))
		return `<a href="https://${social}" target="_blank" class="text-white p-2"><span class="icon-twitter"></span></a>`
	else
		return ''
}

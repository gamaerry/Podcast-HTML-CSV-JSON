class Cabecera extends HTMLElement {
	connectedCallback() {
		crearCabecera(this, queridoJSON.data[0])
		llenarLista(episodiosJSON.data)
	}
}
customElements.define('barra-navegacion', Cabecera)

function crearCabecera(cabecera, querido, episodios){
	cabecera.innerHTML = `<div class="site-wrap">
		<div class="site-mobile-menu">
			<div class="site-mobile-menu-header">
				<div class="site-mobile-menu-close mt-3">
					<span class="icon-close2 js-menu-toggle"></span>
				</div>
			</div>
			<div class="site-mobile-menu-body"></div>
		</div>

		<header class="site-navbar py-4 absolute transparent" role="banner">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-3">
						<h1><a href="index.html" class="text-white h2">${querido.nombre}</a></h1>
					</div>
					<div class="col-9">
						<nav class="site-navigation position-relative text-right text-md-right" role="navigation">
							<div class="d-inline-block ml-md-0 mr-auto py-3">
								<a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a>
							</div>
							<ul class="site-menu js-clone-nav d-none">
								<li>
									<center><img src=${querido.portada.replace(/^.*(?=images)/, '')} alt="Image" width="160"></center>
								</li>
								<li class="has-children active">
									<a href="#">Descargar Episodios:</a>
									<center>
										<small>Para descargar mantenga pulsado (o clic derecho) y seleccione "Guardar vínculo"</small>
									</center>
									<ul class="dropdown arrow-top" id="lista"></ul>
								</li>
								<li><a href="about.html"><br>Acerca de nosotros</a></li>
								<li><a href=${querido.rss.replace(/.+\/([^.]+.xml)/, `$1`)} target="_blank"><br>RSS</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>`
}
function llenarLista(episodios){
	let lista = document.getElementById('lista')
	for (let i = 0; i < episodios.length; i++) {
		//Llenado de la lista:
		lista.innerHTML += `<li><a href="audio/${episodios[i].titulo}.${episodios[i].formato}">${episodios[i].episodio}. ${episodios[i].titulo}</a><\li>`
	}
}

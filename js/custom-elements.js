class Header extends HTMLElement {
  connectedCallback(){
    this.innerHTML=`<div class="site-wrap">
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
            <h1><a href="#" class="text-white h2">Querido Lector:</a></h1>
          </div>
          <div class="col-9" >
            <nav class="site-navigation position-relative text-right text-md-right" role="navigation">
              <div class="d-inline-block ml-md-0 mr-auto py-3">
                <a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a>
              </div>
              <ul class="site-menu js-clone-nav d-none">
                <li>
                  <center><img src="images/queridoLector.jpg" alt="Image" width="160"></center>
                </li>
                <li class="has-children active">
                  <a href="#">Descargar Episodios:</a>
                  <center>
                    <small>Para descargar mantenga pulsado (o clic derecho) y seleccione "Guardar vínculo"</small>
                  </center>
                  <ul class="dropdown arrow-top" id="lista"></ul>
                </li>
                <li><a href="about.html"><br>Acerca de nosotros</a></li>
                <li><a href="QueridoLector.xml" target="_blank"><br>RSS</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>`
  }
}

class Background extends HTMLDivElement {
  connectedCallback(){
    this.innerHTML=`<div class="site-blocks-cover overlay" style="background-image: url(images/portadaQL.jpg);" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-8" data-aos-delay="400" id="portada">
          </div>
        </div>
      </div>
    </div>`
  }
}

customElements.define('barra-navegacion', Header)
customElements.define('fondo', Background, { extends: 'div' })

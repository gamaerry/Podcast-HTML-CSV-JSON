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
            <h1><a href="index.html" class="text-white h2">Querido Lector:</a></h1>
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

class Footer extends HTMLElement {
  connectedCallback(){
    this.innerHTML=`<div class="site-section">
      <div class="container" >
        <div class="row mb-5">
          <div class="col-md-12 text-center">
            <h2 class="font-weight-bold text-black">Detrás del microfono: </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-5">
            <div class="team-member">
              <img src="images/me.jpg" alt="Image" class="img-fluid">
              <div class="text center-block text-center">
                <div class="mb-2 font-weight-light h4">Luis Gerardo</div>
                <div class="d-block mb-2 text-white-opacity-05">México</div>
                <div class="mb-4">Estudiante nicolaita, narrador y editor</div>
                <a href="https://www.facebook.com/sherlocksconsultant" target="_blank" class="text-white p-2"><span class="icon-facebook"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-blocks-cover overlay inner-page-cover" style="background-image: url(images/fondoQL.jpg);" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-6"  data-aos-delay="400">
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
                <h3 class="footer-heading mb-4">Acerca de Querido Lector:</h3>
                <p>Relatos, reflexiones y conversaciones.</p>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="row">
                <div class="col-md-6">
                  <h3 class="footer-heading">Menú rapido</h3>
                </div>
                <div class="col-md-8 col-lg-8">
                  <ul class="list-unstyled">
                    <li><a href="http://fismat.umich.mx/~lg/">Inicio</a></li>
                    <li><a href="http://fismat.umich.mx/~lg/about.html">Acerca de nosotros</a></li>
                    <li><a href="QueridoLector.xml" target="_blank">RSS</a></li>
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
}

customElements.define('barra-navegacion', Header)
customElements.define('pie-pagina', Footer)

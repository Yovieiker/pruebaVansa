const app = document.getElementById("app");
const initialUrl = window.location.hash;
const router = new Navigo("/", {
  hash: true,
});

/*-------------------*/
/*------ Index ------*/
/*-------------------*/
router.on("/", function () {
  app.innerHTML = `
  <div class="slide slide-index">

    <div class="contenido">
    <div class="container">
    <div class="main">
      <div class="character1">
        <img src="images/character-1.png" alt="" />
        <img src="images/character.png" alt="" class="img-responsive"/>

      </div>
      <div>
        <div>
          <h1 class="titulo">
            Te damos la <br />
            bienvenida a Vansa:
          </h1>
          <p class="subtitulo">Prueba técnica de:</p>
          <div class="contenedor-nombre">
            <p class="nombre">Yovieiker Canelon</p>
          </div>
          <div class="contenedor-vacante">
            <p class="vacante">
              Vacante <br />
              Front End
            </p>
          </div>
        </div>
      </div>
      <div class="character2">
        <img src="images/character.png" alt="" />

      </div>
     
    </div>
    <div class="botones">
    <div class="navegacion">
    <ul>
      <li><a href="/info"  data-navigo class="inactivo">Iniciar</a></li>
    </ul>
  </div>
    </div>
  </div> 
    </div>

  

  </div>`;

  $(document).ready(function () {
    // Habilita el botón de siguiente luego de 3 segundos
    setTimeout(function () {
      $("a.inactivo").removeClass("inactivo");
    }, 3000);
  });

  $(".slide").addClass("activo");
});

/*------------------*/
/*------ Info ------*/
/*------------------*/
router.on("/info", function () {
  app.innerHTML = `
  <div class="slide slide-info">

    <div class="contenido">
    <div class="container-info">
    <div class="main">
      <div class="character-info">
        <img src="images/character-3.png" alt="" />
      </div>
      <div class="container-perfil">
        <div class="container-text">
          <p class="text-1">Haz click aqui</p>
        </div>
        <div class="container-img">
          <img src="images/perfil.jpeg" alt="" />
          <button id="toggleButton">
            <img src="images/Vector-1.png" alt="" />
          </button>
        </div>
        <div id="hidden-text" class="container-perfil-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div class="botones">
      <div class="navegacion">
      <ul>
        <li><a href="/" data-navigo>Anterior</a></li>    
        <li><a href="/video"  data-navigo class="inactivo">Siguiente</a></li>
      </ul>
    </div>
      </div>
    </div>
  </div>
    </div>


  </div>`;

  // Habilita el botón de siguiente luego de desplegar la información
  $(document).ready(function () {
    $("#toggleButton").click(function () {
      $("#hidden-text").toggle(); // Alternar la visibilidad del texto oculto
      $(".inactivo").toggleClass("inactivo activo"); // Alternar las clases del botón de siguiente
    });
  });
  $(".slide").addClass("activo");
});

/*-------------------*/
/*------ Video ------*/
/*-------------------*/
router.on("/video", function () {
  app.innerHTML = `
  <div class="slide slide-video">
  <div class="contenido">
    <div class="container">
      <p class="titulo-video">VEAMOS ESTE VIDEO</p>
      <div class="main-video">
        <div class="centrado">
          <div class="video-text">
            <p>¡Haz clic en el botón!</p>
          </div>
          <div class="container-video">
            <button id="openButton">
              <img src="/images/play.png" alt="" />
            </button>
            <div id="videoPopup" class="popup">
              <div class="popup-content">
                <video id="videoPlayer" src="/media/video1.mp4"></video>
                <button id="playPauseBtn">
                  <img
                    id="playIcon"
                    src="/images/play.png"
                    alt="Play"
                    style="display: none"
                  />
                  <img id="pauseIcon" src="/images/pause.png" alt="Pause" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="character-video">
          <img src="images/character-4.png" alt="" />
          <div class="botones">
          <div class="navegacion">
          <ul>
            <li><a href="/info" data-navigo>Anterior</a></li>    
            <li><a href="/redes" data-navigo class="inactivo">Siguiente</a></li>
          </ul>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    

  </div>`;

  // Habilita el botón de siguiente luego de ver el video
  // La música de fondo se detiene o disminuye mientras se vea el video
  $(document).ready(function () {
    var videoPopup = $("#videoPopup");
    var videoPlayer = $("#videoPlayer");
    var playPauseBtn = $("#playPauseBtn");
    var pauseIcon = $("#pauseIcon");
    var playIcon = $("#playIcon");
    var openButton = $("#openButton");

    function openPopup() {
      videoPopup.css("display", "block");
      videoPlayer.get(0).play();
      var siguiente = $(".inactivo");
      siguiente.removeClass("inactivo").addClass("activo");
      var bgSound = document.getElementById("bgsound");
      bgSound.pause();
    }

    function playPauseVideo() {
      var player = videoPlayer.get(0);
      if (player.paused) {
        player.play();
        playIcon.css("display", "none");
        pauseIcon.css("display", "inline");
      } else {
        player.pause();
        pauseIcon.css("display", "none");
        playIcon.css("display", "inline");
      }
    }

    videoPlayer.on("ended", function () {
      videoPopup.css("display", "none");
      var bgSound = document.getElementById("bgsound");
      bgSound.play();
    });

    // Asignar evento click al botón de apertura
    openButton.on("click", openPopup);

    // Asignar evento click al botón de reproducción/pausa
    playPauseBtn.on("click", playPauseVideo);
  });
  $(".slide").addClass("activo");
});

/*-------------------*/
/*------ Redes ------*/
/*-------------------*/
router.on("/redes", function () {
  app.innerHTML = `
  <div class="slide slide-redes">

    <div class="contenido">

    </div>
    <div class="container-info">
    <div class="main-redes ">
      <div class="character-redes">
        <img src="images/character-5.png" alt="" />
      </div>
      <div>
        <div class="container-redes">
          <h1>CONOCE MÁS DE VANSA</h1>
          <div class="container-text-redes">
            <p class="text-1">¡Haz clic en cada ítem!</p>
          </div>
          <div class="container-items">
            <div class="container-item">
              <div class="container-redes-img">
                <img 
                class="margin-img"
                  src="images/iconamoon_search.png"
                  alt=""
                />
                <button  id="toggleButtonWeb">
                  <img
                    src="images/Vector-1.png"
                    alt=""
                    style="rotate: 270deg"
                  />
                </button>
              </div>
              <div id="hidden-text-web" class="container-item-oculto">
                <p>
                  Página web
                  
                </p>
                <a href="https://www.vansa.co/" target="_blank"> https://www.vansa.co/</a>
              </div>
            </div>
            <div class="container-item">
              <div id="hidden-text-lkdin" class="container-item-oculto-lkdin">
                <p>
                  LinkedIn
                </p>
                <a href="https://co.linkedin.com/company/vansalatam" target="_blank">https://co.linkedin.com/company/vansalatam</a>
              </div>
              <div class="container-redes-img">
                <button
                 class="ml-2"
                  id="toggleButtonLk"
                 
                >
                  <img
                    src="images/Vector-1.png"
                    alt=""
                    style="rotate: 90deg"
                  />
                </button>
                <img class="margin-img" src="images/ph_linkedin-logo-light.png" alt="" />
              </div>
            </div>
            <div class="container-item">
              <div class="container-redes-img">
                <img
                class="margin-img"
                  src="images/circum_instagram.png"
                  alt=""
                />
                <button id="toggleButtonInsta">
                  <img
                    src="images/Vector-1.png"
                    alt=""
                    style="rotate: 270deg"
                  />
                </button>
              </div>
              <div id="hidden-text-instagram" class="container-item-oculto">
                <p>
                  Instagram 
                </p>
                <a href="https://www.instagram.com/vansalatam/" target="_blank"> https://www.instagram.com/vansalatam/</a>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="botones">
      <div class="navegacion">
      <ul>
        <li><a href="/video" data-navigo>Anterior</a></li>    
        <li><a href="/servicios" data-navigo class="inactivo">Siguiente</a></li>
      </ul>
    </div>
      </div>
    </div>
  </div>
    

  </div>`;

  // Habilita el botón de siguiente luego de ver todos los desplegables (3)
  $(document).ready(function () {
    var toggleButtonWeb = $("#toggleButtonWeb");
    var toggleButtonLk = $("#toggleButtonLk");
    var toggleButtonInsta = $("#toggleButtonInsta");
    var web = false;
    var lkdin = false;
    var instagram = false;

    function toggleTextWeb() {
      var hiddenText = $("#hidden-text-web");
      hiddenText.toggle();
      web = true;
      siguiente();
    }

    function toggleTextLkdin() {
      var hiddenText = $("#hidden-text-lkdin");
      hiddenText.toggle();
      lkdin = true;
      siguiente();
    }

    function toggleTextInstagram() {
      var hiddenText = $("#hidden-text-instagram");
      hiddenText.toggle();
      instagram = true;
      siguiente();
    }

    function siguiente() {
      if (web === true && lkdin === true && instagram === true) {
        $(".inactivo").removeClass("inactivo").addClass("activo");
      }
    }

    toggleButtonWeb.on("click", toggleTextWeb);
    toggleButtonLk.on("click", toggleTextLkdin);
    toggleButtonInsta.on("click", toggleTextInstagram);
  });
  $(".slide").addClass("activo");
});

/*-----------------------*/
/*------ Servicios ------*/
/*-----------------------*/
router.on("/servicios", function () {
  app.innerHTML = `
  <div class="slide slide-servicios">
  <audio id="transition" preload>
  <source src="media/transition.mp3" type="audio/mp3" />
</audio>
    <div class="contenido">
    <div class="container">
    <div class="container-servicio">
      <h1>LO QUE HACEMOS</h1>

      <div class="carousel-container">
      <div class="container-text">
        <p class="text-1">¡Haz clic las flechas!</p>
      </div>
      <div class="carousel">
      <div class="slide-servicio servicio-background">
        <div class="text-servicio">
          <h2>E-Learning</h2>
          <p>
            Digitalizamos tu formación corporativa con experiencias
            interactivas y enriquecedoras.
          </p>
        </div>
        <div>
          <img src="images/mdi_book-education-outline.png" alt="" />
        </div>
      </div>
      <div class="slide-servicio servicio-background">
        <div class="text-servicio">
          <h2>Formación con expertos</h2>
          <p>
            Ofrecemos sesiones de entrenamiento y talleres prácticos
            personalizados para abordar necesidades empresariales.
          </p>
        </div>
        <div>
          <img src="images/mdi_book-education-outline-2.png" alt="" />
        </div>
      </div>

      <div class="slide-servicio servicio-background">
        <div class="text-servicio">
          <h2>Formación</h2>
          <p>
          Reunimos profesionales de diferentes industrias para colaborar y crecer juntos.
          </p>
        </div>
        <div>
          <img src="images/mdi_book-education-outline-3.png" alt="" />
        </div>
      </div>
    </div>
      <div class="carousel-navigation">
        <button class="prev-btn inactive">&#8249;</button>
        <button class="next-btn">&#8250;</button>
      </div>
      <div class="carousel-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
    </div>
    <div class="botones">
      <div class="navegacion">
      <ul>
        <li><a href="/redes" data-navigo>Anterior</a></li>    
        <li><a href="/cierre" data-navigo class="inactivo">Siguiente</a></li>
      </ul>
    </div>
      </div>
  </div>
    </div>


  </div>`;

  // Habilita el botón de siguiente luego de ver todos los slides del carrusel

  $(".slide").addClass("activo");

  $(document).ready(function () {
    // Al dar click en las flechas del carrusel debe sonar el efecto transition

    var carousel = $(".carousel");
    var slides = $(".slide-servicio");
    var prevBtn = $(".prev-btn");
    var nextBtn = $(".next-btn");
    var dots = $(".dot");

    var slideWidth = slides.eq(0).width();
    var slideIndex = 0;
    function playSoundEffect() {
      var soundEffect = $("#transition")[0];
      soundEffect.play();
    }
    function updateSlidePosition() {
      if (slideWidth <= 400) {
        if (slideIndex === 0) {
          carousel.css("transform", "translateX(0px)");
        } else if (slideIndex === 1) {
          carousel.css("transform", "translateX(-400px)");
        } else if (slideIndex === 2) {
          carousel.css("transform", "translateX(-800px)");
        }
      } else {
        if (slideIndex === 0) {
          carousel.css("transform", "translateX(0px)");
        } else if (slideIndex === 1) {
          carousel.css("transform", "translateX(-600px)");
        } else if (slideIndex === 2) {
          carousel.css("transform", "translateX(-1200px)");
        }
      }
    }

    function updateButtons() {
      prevBtn.toggleClass("inactive", slideIndex === 0);
      nextBtn.toggleClass("inactive", slideIndex === slides.length - 1);
    }

    function updateDots() {
      dots.removeClass("active").eq(slideIndex).addClass("active");
    }

    function prevSlide() {
      if (slideIndex > 0) {
        slideIndex--;
        updateSlidePosition();
        updateButtons();
        updateDots();
        playSoundEffect();
      }
    }

    function nextSlide() {
      if (slideIndex < slides.length - 1) {
        slideIndex++;
        updateSlidePosition();
        updateButtons();
        updateDots();
        playSoundEffect();
        siguiente();
      }
    }

    function goToSlide(index) {
      slideIndex = index;
      updateSlidePosition();
      updateButtons();
      updateDots();
      playSoundEffect();
    }
    function siguiente() {
      if (slideIndex >= 2) {
        $(".inactivo").removeClass("inactivo").addClass("activo");
      }
    }

    $(window).on("resize", function () {
      slideWidth = slides.eq(0).width();
      updateSlidePosition();
    });

    // Asignar eventos a los botones
    prevBtn.on("click", prevSlide);
    nextBtn.on("click", nextSlide);

    // Asignar evento a los puntos
    dots.on("click", function () {
      var index = $(this).index();
      goToSlide(index);
    });

    updateButtons();
    updateDots();
  });
});

/*--------------------*/
/*------ Cierre ------*/
/*--------------------*/
router.on("/cierre", function () {
  app.innerHTML = `
  <div class="slide slide-cierre">

  <div class="contenido">
    <div class="container">
      <div class="main-finalizar">
        <div class="character-finalizar">
          <img src="images/imgFinal.png" alt="" />
        </div>
        <div class="text-final">
          <h1>
            ¡Hemos <br />
            culminado!
          </h1>
          <p>
            Ahora que terminaste, cuéntanos por mail
            <strong>¿Cómo te sentiste en la prueba?</strong>
          </p>
          <p>Hablamos pronto.</p>
          <div class="botones ocultar-responsive ">
      <div class="navegacion">
      <ul>
        <li><a href="/" data-navigo>Reiniciar</a></li>    
        <li><a  href="/https://www.linkedin.com/in/yovieiker-canelon-443691244/" target="_blank" class="inactivo">Finalizar</a></li>
      </ul>
    </div>
      </div>
        </div>
      </div>
    </div>
  </div>

  <div class="botones ocultar-botones-web">
      <div class="navegacion">
      <ul>
        <li><a href="/" data-navigo>Reiniciar</a></li>    
        <li><a href="https://www.linkedin.com/in/yovieiker-canelon-443691244/" target="_blank" class="inactivo">Finalizar</a></li>
        </ul>
    </div>
      </div>

</div>`;

  $(document).ready(function () {
    // Después de 3 segundos, habilita el botón de finalizar
    setTimeout(function () {
      $("a.inactivo").removeClass("inactivo");
    }, 3000);
    //Redigir al link de linkedin
    var finalizarLink = $("a.inactivo");

    var currentURL = "https://www.linkedin.com/in/yovieiker-canelon-443691244/";

    var correctedURL = currentURL.replace("http://127.0.0.1:5500", "");

    finalizarLink.attr("href", correctedURL);
  });

  $(".slide").addClass("activo");
});

router.resolve(initialUrl || "/");

document.addEventListener('DOMContentLoaded', function () {
  const btnAbrirDescripcion = document.querySelectorAll(".btn-abrirDescripcion");
  const btnCerrarDescripcion = document.querySelectorAll(".btn-cerrarDescripcion");
  const popUp = document.querySelectorAll(".popUp");

  btnAbrirDescripcion.forEach((btn, index) => {
      btn.addEventListener('click', () => {
          popUp[index].showModal();
      });
  });

  btnCerrarDescripcion.forEach((btn, index) => {
      btn.addEventListener('click', () => {
          popUp[index].close();
      });
  });
});

//Ir al inicio
document.addEventListener('DOMContentLoaded', function () {
    const irArribaBtn = document.getElementById("irArribaBtn");
    irArribaBtn.addEventListener('click', function () {
      window.scrollTo(0, 0);
    });
  });

//Modo claro / oscuro IMAGEN
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const toggleModeButton = document.getElementById('modoOscuro');

  toggleModeButton.addEventListener('click', () => {
      nav.classList.toggle('header-light');
      nav.classList.toggle('header-dark');
  });
});

//Modo claro / oscuro
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleModeButton = document.getElementById('modoOscuro');

  toggleModeButton.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      body.classList.toggle('dark-mode');
  });
});

//PopUp Descripcion
// const btnAbrirDescripcion = document.getElementById(btn-abrirDescripcion);
// const btnCerrarDescripcion = document.getElementById(btn-cerrarDescripcion);
// const popUp = document.getElementById(popUp);

// btnAbrirDescripcion.addEventListener('click', ()=>{popUp.show});

//PopUp Descripcion
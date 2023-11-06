//Ir al inicio
document.addEventListener('DOMContentLoaded', function () {
    const irArribaBtn = document.getElementById("irArribaBtn");

    irArribaBtn.addEventListener('click', function () {
      window.scrollTo(0, 0);
    });
  });

//Modo claro / oscuro IMAGEN

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const toggleModeButton = document.getElementById('modoOscuro');

  // Manejar el evento de clic en el botón
  toggleModeButton.addEventListener('click', () => {
      // Alternar las clases para cambiar el modo
      header.classList.toggle('header-light');
      header.classList.toggle('header-dark');
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



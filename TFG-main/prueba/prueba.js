//PopUp Descripcion
document.addEventListener('DOMContentLoaded', function () {
  // PopUp Descripcion
  const btnAbrirDescripcion = document.getElementById("btn-abrirDescripcion");
  const btnCerrarDescripcion = document.getElementById("btn-cerrarDescripcion");
  const popUp = document.getElementById("popUp");

  btnAbrirDescripcion.addEventListener('click', () => {
      popUp.showModal();
  });

  btnCerrarDescripcion.addEventListener('click', () => {
      popUp.close();
  });
});
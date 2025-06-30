// Mostrar una alerta automática por unos segundos
$(document).ready(function () {
    const alerta = document.getElementById("alertaImportante");
    setTimeout(() => {
      alerta.classList.add("d-none");
    }, 6000); // Ocultar después de 6 segundos
  });
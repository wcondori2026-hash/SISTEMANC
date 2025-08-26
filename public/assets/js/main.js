function mostrarMenu() {
  $(".main__sidebar").addClass("active");
}

function cerrarMenu() {
  $(".main__sidebar").removeClass("active");
}

$(document).ready(() => {
  // Alerta (Toast)
  const toastTrigger = document.querySelector("#liveToastBtn");

  toastTrigger.addEventListener("click", () => {
    $(".toast").toast("show");
  });
});

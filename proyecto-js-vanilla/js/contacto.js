document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  const btnEnviar = document.getElementById("btnEnviar");
  const formulario = document.getElementById("formularioContacto");

  if (!btnEnviar || !formulario) return;

  btnEnviar.addEventListener("click", () => {
    formulario.reset();
  });
});

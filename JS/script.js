// Scroll suave para âncoras
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    // Garantir que o alvo exista
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Seleciona o hambúrguer e o menu
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

// Adiciona o evento de clique
hamburger.addEventListener("click", () => {
  console.log("Hambúrguer clicado!"); // Verifique no console se o clique foi detectado
  navbar.classList.toggle("active");
});

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
        block: "start", // Ajuste para centralizar melhor
      });
    }
  });
});

// Menu hambúrguer
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  console.log("Hambúrguer clicado!"); // Debug
  navbar.classList.toggle("active");
});

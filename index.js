document.querySelector("#mobile-menu").addEventListener("click", () => {
    document.querySelector("#mobile-nav").classList.add("active");
  });
  document.querySelector("#close-menu").addEventListener("click", () => {
    document.querySelector("#mobile-nav").classList.remove("active");
  });
const icon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");

if (icon) {
  icon.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}

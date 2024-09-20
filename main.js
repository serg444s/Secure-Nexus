const openModalBtn = document.querySelector(".menu-open");
const closeModalBtn = document.querySelector(".menu-close");
const backdrop = document.querySelector(".backdrop");
const body = document.querySelector("body");
const menu = document.querySelector(".menu-nav-list");

function onOpenModal() {
  body.style.overflow = "hidden";
  backdrop.classList.add("is-open");
  menu.addEventListener("click", navigate);
}

function onCloseModal() {
  backdrop.classList.remove("is-open");
  body.style.overflow = "auto";
  menu.removeEventListener("click", navigate);
}

function navigate(event) {
  if (event.target.nodeName !== "A") {
    return;
  } else {
    onCloseModal();
  }
}

openModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);

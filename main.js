const openModalBtn = document.querySelector(".menu-open");
const closeModalBtn = document.querySelector(".menu-close");
const backdrop = document.querySelector(".backdrop");
const body = document.querySelector("body");

function onOpenModal() {
  body.style.overflow = "hidden";
  backdrop.classList.add("is-open");
}

function onCloseModal() {
  backdrop.classList.remove("is-open");
  body.style.overflow = "auto";
}

openModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);

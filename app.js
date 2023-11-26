const chooseResut = document.querySelector(".choose"),
  header = document.querySelector(".header"),
  icon = document.querySelector(".header i"),
  liste = document.querySelector("ul"),
  liEl = document.querySelectorAll("ul li");

header.addEventListener("click", () => {
  liste.classList.toggle("active");
  icon.className = liste.classList.contains("active")
    ? "fa-solid fa-chevron-down"
    : "fa-solid fa-chevron-up";
});

liEl.forEach((el) => {
  el.addEventListener("click", () => {
    console.log(el.dataset.name);
    chooseResut.innerText = el.dataset.name;
    liste.classList.remove("active");
  });
});

const d = document;

d.addEventListener("click", (e) => {
  if (e.target.matches(".container")) {
    let $li = d.querySelectorAll("li");
    $li.forEach((el) => (el.style.animationPlayState = "paused"));
  }
});

d.addEventListener("dblclick", (e) => {
  if (e.target.matches(".container")) {
    let $li = d.querySelectorAll("li");
    $li.forEach((el) => (el.style.animationPlayState = "running"));
  }
});

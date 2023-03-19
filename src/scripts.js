const slider = document.querySelector("#slideshow");
const prevBtn = document.querySelector(".carousel-control-prev");
const nextBtn = document.querySelector(".carousel-control-next");

function handleClick(event) {
  if (event.target === prevBtn) {
    slider.carousel("prev");
  } else {
      (event.target === nextBtn) {
          slider.carousel("next");
      }
  }
}
prevBtn.addEventListener("click", handleClick);
nextBtn.addEventListener("click", handleClick);

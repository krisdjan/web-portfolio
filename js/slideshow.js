let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex].style.display = "block";
}

//Load the first slide when page opens
document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);
  });
  
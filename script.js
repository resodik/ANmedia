const links = document.querySelectorAll('.menu a');

links.forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

    });

});



  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  setInterval(nextSlide, 5000);

const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
        const parent = button.closest(".mobile-collapse");

        parent.classList.toggle("open");

        if (parent.classList.contains("open")) {
            button.textContent = "Zwiń";
        } else {
            button.textContent = "Czytaj więcej";
        }
    });
});

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


const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    lightbox.classList.add("active");
    lightboxImg.src = galleryImages[currentImageIndex].src;
}

function closeLightboxModal() {
    lightbox.classList.remove("active");
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentImageIndex].src;
}

function showPrevImage() {
    currentImageIndex =
        (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentImageIndex].src;
}

galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        openLightbox(index);
    });
});

closeLightbox.addEventListener("click", closeLightboxModal);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightboxModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") {
        closeLightboxModal();
    }

    if (e.key === "ArrowRight") {
        showNextImage();
    }

    if (e.key === "ArrowLeft") {
        showPrevImage();
    }
});

const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");

lightboxPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    showPrevImage();
});

lightboxNext.addEventListener("click", (e) => {
    e.stopPropagation();
    showNextImage();
});

const videoCards = document.querySelectorAll(".video-card");
const videoLightbox = document.querySelector(".video-lightbox");
const lightboxVideo = document.querySelector(".lightbox-video");
const closeVideo = document.querySelector(".close-video");

videoCards.forEach(card => {
    card.addEventListener("click", () => {
        const videoSrc = card.getAttribute("data-video");

        lightboxVideo.src = videoSrc;
        videoLightbox.classList.add("active");
        lightboxVideo.play();
    });
});

function closeVideoLightbox() {
    videoLightbox.classList.remove("active");
    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;
    lightboxVideo.src = "";
}

closeVideo.addEventListener("click", closeVideoLightbox);

videoLightbox.addEventListener("click", (e) => {
    if (e.target === videoLightbox) {
        closeVideoLightbox();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && videoLightbox.classList.contains("active")) {
        closeVideoLightbox();
    }
});

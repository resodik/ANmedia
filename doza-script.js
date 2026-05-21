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

const links = document.querySelectorAll('.menu a');

links.forEach(link => {
    link.addEventListener('click', function(e) {

        const targetId = this.getAttribute('href');

        // działa tylko dla #sekcji
        if (!targetId.startsWith("#")) return;

        e.preventDefault();

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });
});

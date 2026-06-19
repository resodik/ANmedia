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

const videoCards = document.querySelectorAll(".video-card");
const videoLightbox = document.querySelector(".video-lightbox");
const lightboxVideo = document.querySelector(".lightbox-video");
const closeVideo = document.querySelector(".close-video");

if (videoCards.length && videoLightbox && lightboxVideo && closeVideo) {
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
}

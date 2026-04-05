document.addEventListener("DOMContentLoaded", function () {
  // 1. Mobile Navigation Toggle
  const toggleBtn = document.getElementById("navbar-toggle");
  const navCollapse = document.getElementById("ftco-nav");

  if (toggleBtn && navCollapse) {
    toggleBtn.addEventListener("click", function () {
      navCollapse.classList.toggle("show");
      toggleBtn.classList.toggle("active");
    });
  }

  // 2. Sticky Navbar on Scroll
  const navbar = document.getElementById("ftco-navbar");
  const heroWrap = document.querySelector(".hero-wrap");

  function checkScroll() {
    const threshold = heroWrap
      ? heroWrap.offsetHeight / 2
      : window.innerHeight / 2;
    if (window.scrollY > threshold) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", checkScroll);

  // Trigger check on load
  checkScroll();

  // 3. Video Modal Logic
  const watchBtn = document.getElementById("watchVideoBtn");
  const modal = document.getElementById("videoModal");
  const closeBtn = document.querySelector(".close-btn");
  const iframe = document.getElementById("videoIframe");

  // A placeholder internet video link (e.g. YouTube).
  // You can replace this URL with your local "video/your_video.mp4"
  // or any other embeddable link.
  const videoUrl =
    "https://cdn.pixabay.com/video/2021/10/12/91744-636709154_large.mp4";

  if (watchBtn && modal && closeBtn && iframe) {
    // Open Modal
    watchBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      iframe.src = videoUrl; // Set source to start video
      modal.classList.add("show");
    });

    // Close Modal when clicking the close button
    closeBtn.addEventListener("click", function () {
      modal.classList.remove("show");
      setTimeout(() => {
        iframe.src = "";
      }, 300); // Clear source to stop video playback after transition
    });

    // Close Modal when clicking outside the video container
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => {
          iframe.src = "";
        }, 300); // Clear source to stop video playback after transition
      }
    });
  }
});

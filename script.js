const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const revealItems = document.querySelectorAll(".project-card, .creative-card, .explore-list > div");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{opacity: 0, transform: "translateY(18px)"}, {opacity: 1, transform: "translateY(0)"}],
        {duration: 600, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards"}
      );
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

revealItems.forEach(item => observer.observe(item));

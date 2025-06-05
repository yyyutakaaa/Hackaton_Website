document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Interactive color button demo
const colorButtons = document.querySelectorAll(".color-btn");
const morseDisplay = document.getElementById("morseDisplay");

colorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const morse = this.dataset.morse;
    const number = this.dataset.number;
    const color = this.classList[1]; // Get color class

    // Clear display
    morseDisplay.textContent = "";

    // Show morse code with typing effect
    let i = 0;
    morseDisplay.textContent = `${color.toUpperCase()} BUTTON: `;

    const typeInterval = setInterval(() => {
      morseDisplay.textContent += morse[i];
      i++;
      if (i >= morse.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          morseDisplay.textContent += ` = ${number}`;
        }, 500);
      }
    }, 200);

    // Add click animation
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);
  });
});

// Animate progress bars on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".progress-fill");
      progressBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.width = width;
        }, 200);
      });
    }
  });
}, observerOptions);

const progressSection = document.querySelector(".progress");
if (progressSection) {
  progressObserver.observe(progressSection);
}

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

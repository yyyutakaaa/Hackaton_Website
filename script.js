document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

const colorButtons = document.querySelectorAll(".color-btn");
const morseDisplay = document.getElementById("morseDisplay");

colorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const morse = this.dataset.morse;
    const number = this.dataset.number;
    const color = this.classList[1];

    morseDisplay.textContent = "";
    morseDisplay.textContent = `${color.toUpperCase()} KNOP GEDETECTEERD: `;

    let i = 0;
    const typeInterval = setInterval(() => {
      morseDisplay.textContent += morse[i];
      i++;
      if (i >= morse.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          morseDisplay.textContent += ` = GETAL ${number}`;
        }, 500);
      }
    }, 200);

    addClickAnimation(this);
  });
});

function addClickAnimation(element) {
  element.style.transform = "scale(0.95)";
  setTimeout(() => {
    element.style.transform = "scale(1)";
  }, 150);
}

function toggleDetails() {
  const content = document.getElementById('detailsContent');
  const button = document.querySelector('.read-more-btn');

  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    button.textContent = 'Lees meer details';

    button.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  } else {
    content.classList.add('expanded');
    button.textContent = 'Verberg details';

    setTimeout(() => {
      const firstDetail = document.querySelector('.step-detail');
      if (firstDetail) {
        firstDetail.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  }
}

let currentSlideIndex = 1;

function changeSlide(direction) {
  showSlide(currentSlideIndex += direction);
}

function currentSlide(index) {
  showSlide(currentSlideIndex = index);
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (index > slides.length) currentSlideIndex = 1;
  if (index < 1) currentSlideIndex = slides.length;

  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  if (slides[currentSlideIndex - 1]) {
    slides[currentSlideIndex - 1].classList.add('active');
  }
  if (dots[currentSlideIndex - 1]) {
    dots[currentSlideIndex - 1].classList.add('active');
  }
}

const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".progress-fill");
      progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.width = width;
        }, 200 + (index * 100));
      });
    }
  });
}, observerOptions);

const progressSection = document.querySelector(".progress");
if (progressSection) {
  progressObserver.observe(progressSection);
}

let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");

  if (hero) {
    const yPos = -(scrolled * 0.5);
    hero.style.transform = `translate3d(0, ${yPos}px, 0)`;
  }

  ticking = false;
}

function requestParallaxUpdate() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener("scroll", requestParallaxUpdate);

function updateHeaderOnScroll() {
  const header = document.querySelector('header');
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.1)';
    header.style.boxShadow = 'none';
  }
}

window.addEventListener('scroll', updateHeaderOnScroll);

const slideshowContainer = document.querySelector('.slideshow-container');
if (slideshowContainer) {
  slideshowContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });

  slideshowContainer.addEventListener('mouseleave', () => {
    startAutoSlide();
  });
}

document.addEventListener('keydown', (e) => {
  const slideshowVisible = document.querySelector('.gallery').getBoundingClientRect().top < window.innerHeight;

  if (slideshowVisible) {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        changeSlide(-1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        changeSlide(1);
        break;
      case 'Escape':
        clearInterval(slideInterval);
        break;
    }
  }
});

const componentCards = document.querySelectorAll('.component-card');
componentCards.forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-5px) rotateX(5deg)';
    this.style.transition = 'all 0.3s ease';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) rotateX(0)';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('loaded');
  updateHeaderOnScroll();
  console.log('🧩 Cube of Secrets website geladen!');
  console.log('📊 Alle interactive componenten geactiveerd');
});

if (window.performance && window.performance.mark) {
  window.addEventListener('load', () => {
    window.performance.mark('website-interactive');
    console.log('⚡ Website volledig interactief in:',
      performance.now().toFixed(2), 'ms');
  });
}

window.addEventListener('error', function (e) {
  console.warn('Non-critical error handled:', e.message);
});

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
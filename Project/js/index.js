document.addEventListener("DOMContentLoaded", () => {
  // ----- Fade-in Page on Load -----
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.6s ease-in";
  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });

  // ----- Typing effect for .intro h1 -----
  const introText = document.querySelector(".intro h1");
  if (introText) {
    const name = "Zyra Pepito";
    introText.textContent = "";
    let index = 0;
    const typeName = () => {
      if (index < name.length) {
        introText.textContent += name.charAt(index);
        index++;
        setTimeout(typeName, 100);
      }
    };
    typeName();
  }

  // ----- Typing effect for .intro p -----
  const subtitleText = " HTML | CSS | JavaScript | PHP | MySQL ";
  let subIndex = 0;
  const subtitle = document.querySelector(".intro p");
  if (subtitle) {
    subtitle.textContent = "";
    const typeSubtitle = () => {
      if (subIndex < subtitleText.length) {
        subtitle.textContent += subtitleText.charAt(subIndex);
        subIndex++;
        setTimeout(typeSubtitle, 80);
      }
    };
    typeSubtitle();
  }

  // ----- Animate .intros h1 (letter-by-letter) -----
  const introsH1 = document.querySelector(".intros h1");
  if (introsH1) {
    const text = introsH1.textContent;
    introsH1.textContent = '';
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = 0;
      span.style.display = 'inline-block';
      span.style.transform = 'translateY(20px)';
      span.style.animation = 'fadeUp 0.5s forwards';
      span.style.animationDelay = `${i * 0.05}s`;
      introsH1.appendChild(span);
    });
  }

  // ----- Highlight Active Nav Link -----
  const current = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(link => {
    if (
      link.getAttribute("href") === current ||
      (current === "" && link.getAttribute("href") === "index.html")
    ) {
      link.style.color = "#007acc";
    }
  });

  // ----- Menu Toggle -----
  const toggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");
  if (toggle && navbar) {
    toggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }
});

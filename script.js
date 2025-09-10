// ===== Typing Effect =====
const text = "Mahmoud Alaa Eldin Aziz";
let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 120);
  }
}
typingEffect();



// ===== Scroll Animation =====
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
hiddenElements.forEach((el) => observer.observe(el));

// ===== Mobile Navbar Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== Navbar Transparency =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.remove("transparent");
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.add("transparent");
    navbar.classList.remove("scrolled");
  }
});

// عند أول تحميل الصفحة تبقى شفافة
navbar.classList.add("transparent");

// ===== Smooth Scroll (زيادة تحكم) =====
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    const offset = navbar.offsetHeight; // عشان ما يغطيش الجزء العلوي
    const targetPosition = targetSection.offsetTop - offset + 10;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

    // قفل المنيو في الموبايل بعد الضغط
    navLinks.classList.remove("active");
  });
});
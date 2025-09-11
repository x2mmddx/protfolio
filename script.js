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

const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li a");
  const sections = document.querySelectorAll("section");

  // فتح/قفل المنيو
  toggle.addEventListener("click", () => nav.classList.toggle("active"));

  // قفل المنيو بعد الضغط على لينك
  navLinks.forEach(link => link.addEventListener("click", () => nav.classList.remove("active")));

  // Scroll spy
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 70;
      const height = section.clientHeight;
      if (scrollY >= top && scrollY < top + height) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) link.classList.add("active");
    });

    // Navbar background change
    document.querySelector(".navbar")
      .classList.toggle("scrolled", window.scrollY > 50);
  });

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
  // فتح / قفل المنيو في الموبايل
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li a");
const sections = document.querySelectorAll("section");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // قفل المينيو بعد الضغط على لينك (في الموبايل بس)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  // Scroll Spy (يحدد الـ active اثناء التمرير)
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70; // علشان الـ navbar ثابت
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});


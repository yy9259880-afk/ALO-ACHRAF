
/* =====================================
   ALO CHARAF — MAIN JAVASCRIPT
   Designed by Team NEXORA
===================================== */

/* CONFIGURATION */

const CONFIG = {
  // حط هنا رقم أشرف بصيغة دولية بدون +
  // مثال: 2126XXXXXXXX
  whatsappNumber: "",

  brandName: "ALO CHARAF"
};


/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    menuToggle.textContent =
      nav.classList.contains("open") ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.textContent = "☰";
    });
  });

}


/* =====================================
   WHATSAPP FUNCTION
===================================== */

function openWhatsApp(message) {

  if (!CONFIG.whatsappNumber) {
    alert(
      "WhatsApp number is not configured yet. Please contact ALO CHARAF directly."
    );
    return;
  }

  const number = CONFIG.whatsappNumber.replace(/\D/g, "");

  if (!number) {
    alert("Please configure a valid WhatsApp number.");
    return;
  }

  const url =
    "https://wa.me/" +
    number +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");

}


/* =====================================
   WHATSAPP BUTTONS
===================================== */

document.querySelectorAll(".wa-link").forEach(button => {

  button.addEventListener("click", function(event) {

    event.preventDefault();

    const message =
      "Salam Achraf, bghit nطلب livraison.\n\n" +
      "Pickup location:\n" +
      "Delivery destination:\n" +
      "Order details:\n" +
      "Phone number:";

    openWhatsApp(message);

  });

});


/* =====================================
   DELIVERY FORM
===================================== */

const deliveryForm = document.getElementById("deliveryForm");

if (deliveryForm) {

  deliveryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!deliveryForm.reportValidity()) {
      return;
    }

    const formData = new FormData(deliveryForm);

    const name = formData.get("name").trim();
    const phone = formData.get("phone").trim();
    const pickup = formData.get("pickup").trim();
    const destination = formData.get("destination").trim();
    const details = formData.get("details").trim();

    if (!name || !phone || !pickup || !destination || !details) {
      alert("Please complete all fields.");
      return;
    }

    const message =
      "SALAM ACHRAF! I WANT TO REQUEST A DELIVERY.\n\n" +

      "👤 Full name: " + name + "\n" +
      "📞 Phone: " + phone + "\n\n" +

      "📍 Pickup location:\n" + pickup + "\n\n" +

      "📍 Delivery destination:\n" + destination + "\n\n" +

      "📦 Delivery details:\n" + details + "\n\n" +

      "Sent from ALO CHARAF Website.";

    openWhatsApp(message);

  });

}


/* =====================================
   SCROLL REVEAL ANIMATIONS
===================================== */

const revealElements = document.querySelectorAll(
  ".section, .card, .steps article, .why-list article, .map"
);

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observerInstance.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    element.classList.add("reveal-on-scroll");
    observer.observe(element);
  });

}


/* =====================================
   CURRENT YEAR
===================================== */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#nav a[href^='#']");

if ("IntersectionObserver" in window) {

  const sectionObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          navLinks.forEach(link => {
            link.classList.remove("active");
          });

          const activeLink = document.querySelector(
            `#nav a[href="#${entry.target.id}"]`
          );

          if (activeLink) {
            activeLink.classList.add("active");
          }

        }

      });

    },
    {
      threshold: 0.4
    }
  );

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

}


/* =====================================
   CONSOLE BRAND SIGNATURE
===================================== */

console.log(
  "%c ALO CHARAF ",
  "background:#1677ef;color:white;font-size:20px;font-weight:bold;padding:10px;"
);

console.log(
  "%c Designed & Developed by Team NEXORA",
  "color:#459cff;font-size:12px;font-weight:bold;"
);

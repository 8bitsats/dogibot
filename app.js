// NAV
gsap.fromTo(
  ".nav-bar",
  { opacity: 0, yPercent: -10, duration: 1 },
  { yPercent: 0, opacity: 1 },
  ">"
);

// TEXT
gsap.fromTo(
  ".text-header",
  { opacity: 0 },
  { opacity: 1, duration: 0.05, stagger: 1 },
  ">"
);

gsap.fromTo(".header-img", { opacity: 0, duration: 1 }, { opacity: 1 }, ">");

// SLIDER
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showSlide, 3000);

//
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".copy-icon").addEventListener("click", function () {
    var addressElement = document.querySelector(".address h3");
    var address = addressElement.textContent.trim();

    // Create a temporary textarea to copy text to clipboard
    var tempInput = document.createElement("textarea");
    tempInput.value = address;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Alert user
    alert("Address copied to clipboard: " + address);
  });
});

// FORM

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_52rwz4l";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

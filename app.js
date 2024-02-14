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
  { opacity: 1, duration: 0.1, stagger: 1 },
  ">"
);

gsap.fromTo(".header-img", { opacity: 0, duration: 1 }, { opacity: 1 }, ">");

gsap.fromTo(
  "#little-block",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#little-block_2",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#little-block_3",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#little-block_4",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#little-block_5",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#little-block_6",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#yellow-block",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#yellow-block_2",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#yellow-block_3",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#yellow-block_4",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#yellow-block_5",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#yellow-block_5",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#rectangle-block",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#rectangle-block_2",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#little-block-light-blue",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#little-block-light-blue_2",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#little-block-light-blue_3",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#little-block-light-blue_4",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo("#light-green", { opacity: 0 }, { opacity: 1, duration: 0.1 }, ">");
gsap.fromTo(
  "#light-green_2",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#light-green_3",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);
gsap.fromTo(
  "#light-green_4",
  { opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);

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

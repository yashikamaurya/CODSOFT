// ==============================professional skills==============================

const circles = document.querySelectorAll(".circle");

circles.forEach((element) => {
  const dots = parseInt(element.getAttribute("data-dots"));
  const marked = parseFloat(element.getAttribute("data-percent")) / 100;
  const totalPoints = Math.floor(dots * marked);
  const rotate = 360 / dots;
  let points = "";

  for (let i = 0; i < dots; i++) {
    const isActive = i < totalPoints ? "glow" : "";
    points += `<div class="points ${isActive}" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }

  element.innerHTML = points;
});

// ======================scrolll behaviour===========================

const anchorTags = document.querySelectorAll("a");

anchorTags.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();

    const target = anchor.getAttribute("href");

    if (target && target.startsWith("#")) {
      const targetElement = document.querySelector(target);

      targetElement.scrollIntoView({ behavior: "smooth" });

      const checkIfScrolled = () => {
        const targetOffsetTop = targetElement.offsetTop;

        if (Math.abs(window.scrollY - targetOffsetTop) < 5) {
          window.removeEventListener("scroll", checkIfScrolled);

          setTimeout(() => {
            location.reload();
          }, 200);
        }
      };

      window.addEventListener("scroll", checkIfScrolled);
    }
  });
});
// ====================================button resume==========================
document
  .getElementById("downloadLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default open behavior
    let link = document.createElement("a");
    link.href = "example.pdf";
    link.download = "MyPDF.pdf"; // Custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

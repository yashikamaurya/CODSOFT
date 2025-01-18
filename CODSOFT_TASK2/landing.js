function imgshow(small) {
  const full = document.getElementById("img-show");
  full.src = small.src;
}
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior

    const targetId = this.getAttribute("href").substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetId);

    // Smooth scroll to the target section
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

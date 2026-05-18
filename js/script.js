let isLocked = true;

window.addEventListener(
  "wheel",
  function (e) {
    if (isLocked && window.scrollY === 0) {
      if (e.deltaY > 0) {
        e.preventDefault();

        const target = document.getElementById("image_board");

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });

          setTimeout(() => {
            isLocked = false;
          }, 800);
        }
      }
    }
  },
  { passive: false },
);

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    isLocked = true;
  }
});

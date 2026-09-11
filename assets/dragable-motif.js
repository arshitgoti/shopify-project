document.addEventListener("DOMContentLoaded", () => {
  const motifs = document.querySelectorAll(".motif-item");
  const canvas = document.getElementById("design-layer");

  motifs.forEach(motif => {
    motif.addEventListener("click", () => {
      const img = document.createElement("img");

      img.src = motif.src;
      img.className = "motif-dropped";

      img.style.left = "50px";
      img.style.top = "50px";

      canvas.appendChild(img);

      makeDraggable(img);
    });
  });

  function makeDraggable(el) {
    let offsetX = 0, offsetY = 0, isDown = false;

    el.addEventListener("mousedown", (e) => {
      isDown = true;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      el.style.cursor = "grabbing";
    });

    document.addEventListener("mouseup", () => {
      isDown = false;
      el.style.cursor = "grab";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDown) return;

      const parent = document.getElementById("design-layer");
      const rect = parent.getBoundingClientRect();

      el.style.left = (e.clientX - rect.left - offsetX) + "px";
      el.style.top = (e.clientY - rect.top - offsetY) + "px";
    });
  }
});
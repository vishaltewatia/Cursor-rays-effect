const cursor = document.querySelector(".cursor");
const rays = document.querySelector(".rays");

// Function to move the cursor
function moveCursor(x, y) {
  cursor.style.left = x - cursor.clientWidth / 2 + "px";
  cursor.style.top = y - cursor.clientHeight / 2 + "px";
}

// Function to create and add a ray
function createRay(x) {
  const ray = document.createElement("div");
  ray.classList.add("ray");
  ray.style.left = x + "px";
  ray.style.top = "0px";

  rays.appendChild(ray);

  // Remove the ray after the animation
  ray.addEventListener("animationend", () => {
    ray.remove();
  });
}

// Mousemove event
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  moveCursor(x, y);
  createRay(x);
});

// Touch events
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0]; // Get the first touch
  const x = touch.clientX;
  const y = touch.clientY;
  moveCursor(x, y);
  createRay(x);
});

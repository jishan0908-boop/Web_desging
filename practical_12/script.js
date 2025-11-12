const text = document.getElementById("text");
let size = 10;           // starting font size
let growing = true;      // track if text is growing

const timer = setInterval(() => {
  if (growing) {
    size += 1;
    text.style.fontSize = size + "pt";
    text.textContent = "Bigger Text";
    text.style.color = "red";

    if (size >= 50) {
      growing = false; // switch to shrinking
      text.textContent = "Smaller Text";
      text.style.color = "green";
    }
  } else {
    size -= 1;
    text.style.fontSize = size + "pt";
    text.textContent = "Smaller Text";
    text.style.color = "green";

    if (size <= 5) {
      clearInterval(timer); // stop animation
    }
  }
}, 10);

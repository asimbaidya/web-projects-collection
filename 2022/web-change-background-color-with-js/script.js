const btn = document.getElementById("btn");

function color() {
  // generate color {r,g,b}
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  // generate opecity
  let opacity = Math.random();

  // construct colir with generated values
  let color = `rgba(${r},${g},${b},${Number(opacity.toFixed(2))})`;

  // update  backgroundColor & put color as text in h3
  document.body.style.backgroundColor = color;
  document.getElementById("color-value").innerText = color;
}

// event  listener for mouseover and click
btn.addEventListener("click", color);
btn.addEventListener("mouseover", color);

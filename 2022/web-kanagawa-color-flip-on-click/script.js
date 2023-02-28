const kanagawa = [
  "#DCD7BA",
  "#C8C093",
  "#16161D",
  "#1F1F28",
  "#2A2A37",
  "#363646",
  "#54546D",
  "#223249",
  "#2D4F67",
  "#2B3328",
  "#49443C",
  "#43242B",
  "#252535",
  "#76946A",
  "#C34043",
  "#DCA561",
  "#E82424",
  "#FF9E3B",
  "#6A9589",
  "#658594",
  "#727169",
  "#938AA9",
  "#957FB8",
  "#7E9CD8",
  "#9CABCA",
  "#7FB4CA",
  "#A3D4D5",
  "#7AA89F",
  "#98BB6C",
  "#938056",
  "#C0A36E",
  "#E6C384",
  "#D27E99",
  "#E46876",
  "#FF5D62",
  "#FFA066",
  "#717C7C",
];

const btn = document.getElementById("btn");

function hexToRgba(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  console.log(r, g, b);
  return `${r},${g},${b}`;
}

function updateBg() {
  // get random index
  const randomIndex = Math.floor(Math.random() * kanagawa.length);
  // obtain that random value from colors
  const bg = kanagawa[randomIndex];

  // change body's bg
  // document.body.style.backgroundColor = bg;
  document.body.style.backgroundColor = bg;

  // update text  in color
  document.getElementById("color").innerText = bg;

  // change color of  clors values
  document.getElementById("color").style.color = bg;

  // nav
  document.getElementById(
    "nav"
  ).style.backgroundColor = `rgba(${hexToRgba},0.2)`;
  // document.getElementById('nav').style.backgroundColor = bg;
  console.log(hexToRgba(bg, 0.1));
}

btn.addEventListener("click", updateBg);


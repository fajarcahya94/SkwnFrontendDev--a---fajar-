let changeImage = document.getElementById("image-ganti");

function checkResolution() {
  let screenWidth = window.innerWidth;

  if (screenWidth < 769) {
    changeImage.src = "/assets/img/image-64.png";
  } else {
    changeImage.src = "/assets/img/image64.png";
  }
}

function getData() {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getData();
checkResolution();

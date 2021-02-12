import "../style/index.scss";

import "tilt.js";
import "jquery.nicescroll";
import "owl.carousel";

import "./partials/header";
import "./partials/nav";
import "./partials/about";
import "./partials/scroll";
import "./partials/portfolio";

$(".fixed-btn").on("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  console.log("you clicked on button #");
  window.open("https://api.whatsapp.com/send?phone=+966550561364&text=Hello", "_blank");
});

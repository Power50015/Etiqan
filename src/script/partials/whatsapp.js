$(".fixed-btn").on("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  window.open(
    "https://api.whatsapp.com/send?phone=+966550561364&text=السلام عليكم",
    "_blank"
  );
});
var falg = true;
$(document, window).scroll(function () {
  if (falg) {
    if ($(document).scrollTop() > 900) {
      falg = false;
      $(".whatsapp-msg").animate({ bottom: "28px" }, 200);
    }
  }
});

$(".fixed-btn").click(function () {
  $(".whatsapp-msg").hide();
});

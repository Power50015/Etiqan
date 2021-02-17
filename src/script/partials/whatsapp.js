$(".fixed-btn").on("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    console.log("you clicked on button #");
    window.open("https://api.whatsapp.com/send?phone=+966550561364&text=Hello", "_blank");
  });
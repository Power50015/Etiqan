import toastr from "toastr";
$("#contact-form-btn").click(function (event) {
  event.preventDefault();
  var values = $(this).serialize();
  $.ajax({
    dataType: "json",
    url: "./mail.php",
    type: "post",
    data: values,
  })
    .done(function (response, textStatus, jqXHR) {
      location.replace("/msg.html");
    })
    .fail(function (xhr, status, errorThrown) {
      if (xhr.status == 200) {
        location.replace("/msg.html");
      } else {
        if ($(".input-msg").val().length === 0) {
          toastr.warning("يرجى عدم ترك الرساله فارغه .");
        } else {
          toastr.error("حدث خطأ يرجى المحاوله لاحقا");
        }
      }
    });
});

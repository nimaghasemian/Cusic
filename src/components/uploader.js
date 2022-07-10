function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-upload-wrap").hide();

      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();

      $(".image-title").html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".music-upload-wrap").show();
}
$(".music-upload-wrap").bind("dragover", function () {
  $(".music-upload-wrap").addClass("image-dropping");
});
$(".music-upload-wrap").bind("dragleave", function () {
  $(".music-upload-wrap").removeClass("image-dropping");
});

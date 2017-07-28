$(document).ready(function() {
  $(".comment").on("click", function(event){
    event.preventDefault();

    var $this = $(this);
    $this.closest("small").nextAll("p").css("display", "block");

  });
});

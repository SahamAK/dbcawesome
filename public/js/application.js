$(document).ready(function() {
  $(".comment").on("click", function(event){
    event.preventDefault();

    var $this = $(this);
    var $form = $this.closest("small").nextAll(".comment-form").first();
    $form.slideToggle("slow");

    // revisit code
    // if ($this.text("Add Comment")){
    //   $this.text("Hide Comment");
    // } else if ($this.text("Hide Comment")) {
    //   $this.text("Add Comment");
    // } else {
    //   $this.text("Add Comment")
    // }

  });
});

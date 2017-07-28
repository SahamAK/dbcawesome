$(function() {

  // BUTTON TO SHOW ANSWER FORM
  $("button.add").on("click", function(){
    event.preventDefault();

    $(this).nextAll("form.add-form").slideToggle();
    $(this).hide();
  });

  // ANSWER FORM ON SUBMIT AJAX
  $("form.add-form").on("submit", function(event){
    event.preventDefault();
    var $this = $(this);

    var request = $.ajax({
      url: $this.attr("action"),
      type: $this.attr("method"),
      data: $this.serialize()
    });

    request.done(function(response){
      $this.find("textarea").val("");
      console.log(response);

      // come back to this later.  Fade is not working as intended.
      $this.slideToggle();
      $(".answer-container").prepend(response);
      $("button.add").show();
    });
  });

//  ADD COMMENTS
//   $("a.comment-link").on("click", function(event){
//     event.preventDefault();
//     var $this = $(this)

//     console.log("Mooooo!")



//   })

});

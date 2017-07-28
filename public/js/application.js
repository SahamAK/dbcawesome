$(function() {

  // BUTTON TO SHOW ANSWER FORM
  $("button.add").on("click", function(){
    event.preventDefault();

    $(this).nextAll("form.add-form").slideToggle();
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


  });



});

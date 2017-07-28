$(document).ready(function() {

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

  // AJAXifying add question to homepage
  $("#questions").on('submit', function(){
    event.preventDefault();
    console.log("I'm in questions form");
    var $that = $(this);
    console.log($that);
    var str = $that.serialize();
    var path = $that.attr('action');

    $.ajax({
      url: path,
      method: 'POST',
      data: str,
    })
    .done(function(response) {
      console.log(response);
      $that.closest('#question-section').find('.question-container').append( response);
    })
    // .fail(function() {
    //   console.log("error");
    // })
    // .always(function() {
    //   console.log("complete");
    // });


  });

  // AJAX for upvoting for question
  $(".question-container").on("submit", ".button-up", function(){
    event.preventDefault();
    console.log($(this));
    $this = $(this);

    var request = $.ajax({
      url: $this.attr('action'),
      type: $this.attr('method'),
      // data: $this.find('input').attr('value'),
      data: $this.closest('form').serialize(),
    })
    request.done(function(response) {
      $this.nextAll('span').text(response)
    })
    // .fail(function() {
    //   console.log("error");
    // })
    // .always(function() {
    //   console.log("complete");
    // });

  });

// AJAX for downvoting for question
  $(".question-container").on("submit", ".button-down", function(){
    event.preventDefault();
    console.log($(this));
    $this = $(this);

    var request = $.ajax({
      url: $this.attr('action'),
      type: $this.attr('method'),
      // data: $this.find('input').attr('value'),
      data: $this.closest('form').serialize(),
    })
    request.done(function(response) {
      // console.log(response);
      // response
      $this.prevAll('span').text(response)
    })
    // .fail(function() {
    //   console.log("error");
    // })
    // .always(function() {
    //   console.log("complete");
    // });

  });


});

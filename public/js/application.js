$(document).ready(function() {

  // BUTTON TO SHOW ANSWER FORM
  $("button.add").on("click", function(){
    event.preventDefault();

    $(this).nextAll(".add-answer-form").slideToggle();
    $(this).hide();
  });

  // ANSWER FORM ON SUBMIT AJAX
  $(".answer-container").on("submit", ".add-answer-form", function(event){
    event.preventDefault();
    var $this = $(this);

    var request = $.ajax({
      url: $this.attr("action"),
      type: $this.attr("method"),
      data: $this.serialize()
    });

    request.done(function(response){
      $this.find("textarea").val("");
      $this.slideToggle();
      $this.parent().nextAll(".answer-container").prepend(response);
      $("button.add").show();

    });
  });

 // ADD COMMENTS
  $(".answer-container").on("click", ".comment-link", function(event){
    event.preventDefault();
    var $this = $(this)

    $(this).nextAll(".add-comment-form").slideToggle();
    $(this).hide();
  });

  // // COMMENT FORM ON SUBMIT AJAX
  $(".answer-container").on("submit", ".add-comment-form", function(event){
    event.preventDefault();
    var $this = $(this);

    var request = $.ajax({
      url: $this.attr("action"),
      type: $this.attr("method"),
      data: $this.serialize()
    });

    request.done(function(response){
      $this.find("textarea").val("");
      $this.closest(".answer").find(".comment-container").prepend(response);
      $this.slideToggle();
      $("a.comment-link").show();
    });
  });





 // ADD COMMENTS TO QUESTIONS
  $(".question-comment").on("click", ".comment-link", function(event){
    event.preventDefault();
    var $this = $(this)

    $(this).nextAll(".add-comment-form").slideToggle();
    $(this).hide();
  });



  // // COMMENT FORM FOR QUESTIONS ON SUBMIT AJAX
  $(".question-comment").on("submit", ".add-comment-form", function(event){
    event.preventDefault();
    var $this = $(this);

    var request = $.ajax({
      url: $this.attr("action"),
      type: $this.attr("method"),
      data: $this.serialize()
    });

    request.done(function(response){
      $this.find("textarea").val("");
      $this.closest(".comment-container").prepend(response);
      $this.slideToggle();
      $("a.comment-link").show();
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

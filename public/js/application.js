$(function() {

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



});



$(document).ready(function(){
// Napojení Animace
  new WOW().init();

var button= $("#button");
var modal= $("#modal");
var close= $("#close");

button.on("click", function(){
    modal.addClass("modal_active")
});

close.on("click", function(){
    modal.removeClass("modal_active")
});

// Validace formuláře

$("#brief-form").validate({
  rules:{
    username: "required"
  }
  ,messages: {
    username: "Zadejte vaše správné jméno"
  }
});


// Napojení slideru 
$(".slider").slick({
    slidesToShow: 3,
    prevArrow: $(".arrows__left"),
    nextArrow: $(".arrows__right"),
    responsive: [    
    {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
}); 

});

$(document).ready(function(){
  $("form#questions").submit(function(event){

    event.preventDefault();
  });
  $("form#redo").click(function(event) {
     $(".container-fluid").children().toggle();
     setTimeout(function () {
       location.reload()}, 10);
     event.preventDefault();
});

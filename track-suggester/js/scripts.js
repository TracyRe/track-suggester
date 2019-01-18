$(document).ready(function(){
  $("form#questions").submit(function(event){

    var frontBack = $("select#frontBack").val();
    var patience = $("select#patience").val();

    if ( patience === "nopatience") {
      console.log(patience);
      $(".container-fluid").children().toggle();
      $(".nopatience").show();
    } else if (frontBack === "front") {
      $(".container-fluid").children().toggle();
        console.log(frontBack);
      $(".courses").show();
      $(".design").show();
    // } else if () {

    } else {
      $(".container-fluid").children().toggle();
      $(".notsure").show();
    }

    event.preventDefault();
  });
  $("button#redo").click(function(event) {
     $(".container-fluid").children().toggle();
     setTimeout(function () {
       location.reload()}, 10);
     event.preventDefault();
   });
 });

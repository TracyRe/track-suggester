$(document).ready(function(){
  $("form#questions").submit(function(event){

    var style = $("select#style").val();
    var patience = $("select#patience").val();
    var beer = $("select.beer").val();
    var company = $("select.company").val();
    var apps = $("select.apps").val();

    if ( patience === "nopatience") {
      console.log(patience);
      $(".container-fluid").children().toggle();
      $(".nopatience").show();
    } else if ((style === "fashion") || (style === "classic")) {
      $(".container-fluid").children().toggle();
        console.log(style);
      $(".courses").show();
      $(".design").show();
    // } else if () {



    // }
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

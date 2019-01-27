$(document).ready(function(){
  $("form#questions").submit(function(event){

    var style = $("select#style").val();
    var patience = $("select#patience").val();
    var beer = $("select#beer").val();
    var company = $("select#company").val();
    var apps = $("select#apps").val();
    var name = $("input#name").val();

    if ( patience === "nopatience") {
      $(".content-wrapper").children().toggle();
      $(".nopatience").show();
    } else if ((style === "fashion") || (style === "classic")) {
      $(".content-wrapper").children().toggle();
      $(".courses").show();
      $(".design").show();
    } else if ((company === "nike") || (apps === "mobile")) {
      $(".content-wrapper").children().toggle();
      $(".courses").show();
      $(".java").show();
    } else if (((company === "agency") || (company === "government")) && ((apps === "mobile") || (apps === "websites"))) {
      $(".content-wrapper").children().toggle();
      $(".courses").show();
      $(".php").show();
    } else if (((apps === "enterprise") && (patience === "job")) || ((apps === "enterprise") && ((company === "corp") && (beer === "c-sharp")))) {
      $(".content-wrapper").children().toggle();
      $(".courses").show();
      $(".c-sharp").show();
    } else if (((apps === "enterprise") && (company === "corp")) && ((beer === "java") || (patience === "verypatient"))) {
      $(".content-wrapper").children().toggle();
      $(".courses").show();
      $(".java").show();
    } else if (( company === "startup") || ( apps === "interactive")) {
      $(".content-wrapper").children().toggle();
      $(".courses").show();
      $(".ruby").show();
    } else {
      $(".content-wrapper").children().toggle();
      $(".notsure").show();
    }

    if (name !== "") {      
    $("span.name").append(name + ", ");
  }

    // DEBUGGING ASSISTANCE
    // console.log(company);
    // console.log(patience);
    // console.log(apps);
    // console.log(style);
    // console.log(beer);
    // console.log(name);
    event.preventDefault();
  });
  $("button#redo").click(function(event) {
     $(".content-wrapper").children().toggle();
     setTimeout(function () {
       location.reload()}, 10);
     event.preventDefault();
   });
 });

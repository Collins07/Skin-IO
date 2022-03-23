$(document).ready(function() {
  $("#p1").click(function(){
    $("#p1").css("border-bottom", "3px solid black")
    $("#p2").css("border-bottom", "none")
    $("#p3").css("border-bottom", "none")
    $("#col3").show();
    $("#col4").show();
    $("#col5").show();
    $("#fluid2").css("height","200px")
    $("#row2").css("height","200px")
    $("#row2").show();
    $("#row3").hide();
    $("#row4").hide();
  })
 
  $("#p2").click(function(){
  $("#row2").toggle();
  $("#row3").toggle();
  $("#p2").css("border-bottom", "3px solid black")
  $("#p3").css("border-bottom", "none")
  $("#p1").css("border-bottom", "none")
  $("#fluid2").css("height","300px")
  $("#row3").css("height","300px")
  $("#row2").hide();
  $("#row3").show();
  $("#row4").hide();
  })

  $("#p3").click(function(){
    $("#p3").css("border-bottom", "3px solid black")
    $("#p2").css("border-bottom", "none")
    $("#p1").css("border-bottom", "none")
    $("#fluid2").css("height","300px")
    $("#row2").css("height","300px")
    $("#row2").hide();
    $("#row3").hide();
    $("#row4").show();
  }) 

    $("#p6").click(function(){
      $("#row6").toggle();
      $("#row5").toggle();
  
    
    });
  });
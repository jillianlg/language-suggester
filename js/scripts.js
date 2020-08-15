// User Interface
$(document).ready(function() {
  console.log("Script executing!")
  $("form#profileInfo").submit(function(event) {
    console.log("Submit form successfully reached.");
    event.preventDefault();
    let personalityInput = $("#personality").val();
    let interestInput = $("#interest").val();
    // let colorInput = $("#color").val();
    // let musicInput = $("#music").val();
    // let animalInput = $("#animal").val();

    $(".java-script, .python, .rudy").hide();

    if (personalityInput === "controled" && interestInput === "reading murder mystery" || personalityInput === "detail oriented" && interestInput === "playing Sudoku" || personalityInput === "controled" && interestInput === "playing Sudoku" || personalityInput === "detail oriented" && interestInput === "reading murder mystery") {
      $(".python, .weSuggest, .about").show(); 
    } else if (personalityInput === "spontaneous" && interestInput === "going to a concert" || personalityInput === "spontaneous" && interestInput === "playing video games" || personalityInput === "care free" && interestInput === "going to a concert" || personalityInput === "care free" && interestInput === "playing video games") {
      $(".ruby, .weSuggest, .about").show(); 

    } else {
      $(".java-script, .weSuggest, .about").show(); 
    } 
  });
});
// OBJECTIVES
// All previous standards (last week's objectives) are in place (see below)
// Site uses branching to return the result.
// jQuery is used to show and hide the result after questions are answered and submitted. (Tip: test your app several times with different answers.)
// Variable names are descriptive of what they represent.
// Web page is styled using Bootstrap and custom CSS.

// Question 1 card id=personalityQuestion form id=personality
// Question 2 card id=interestQuestion form id=interest
// Question 3 card id=colorQuestion form id=color
// Question 4 card id=musicQuestion form id=music
// Question 4 card id=animalQuestion form id=animal

// User Interface
$(document).ready(function() {
  console.log("Script executing!")
  $("form#profileInfo").submit(function(event) {
    console.log("Submit form successfully reached.");
    event.preventDefault();
    let personalityInput = $("#personality").val();
    let interestInput = $("#interest").val();
    console.log("interestInput");

    $(".java-script, .python, .ruby").hide();


    if (personalityInput) {
      if (personalityInput === "controled" && interestInput === "reading murder mystery") {
        $(".python, .languageSuggestion").show();  
      }
        else if (personalityInput === "detail oriented" && interestInput === "playing Sudoku") {
          $(".ruby, .languageSuggestion").show();  
        }
      else {
        $(".java-script, .languageSuggestion").show();
      } 
    }
  });
});
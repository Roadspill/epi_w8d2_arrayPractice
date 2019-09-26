$(document).ready(function() {
  $("form#counterCalc").submit(function(event){
    event.preventDefault();
    // Input Global Variables
    var countUpInput = parseInt($("input#countUpTo").val());
    var countByInput = parseInt($("input#countUpBy").val());

    var counted = [];

    if (countUpInput === "" || countByInput === "") {
      alert("Please enter a number in both fields.")
    } else if (countByInput > countUpInput) {
      alert("Your number to count by is larger than your the number to count to.")
    } else if (countUpInput <= 0 || countByInput <=0) {
      alert("Your number must be greater than 0.")
    } else {
      for (index = countByInput; index <= countUpInput; index += countByInput) {
        counted.push(index);
      }
      console.log(counted)
    }
  });
});

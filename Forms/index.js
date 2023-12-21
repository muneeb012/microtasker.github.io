
  function test() {
    // Get form input values
    var firstName = document.getElementById("names").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("mail").value;
    var country = document.getElementById("country").value;
    var phone = document.getElementById("phone").value;
    var budget = document.getElementsByName("budget")[0].value;
    var find = document.getElementById("find").value;
    var agreeChecked = document.getElementById("checked").checked;

    // Reset error messages
    document.getElementById("nm1").style.display = "none";
    document.getElementById("nm2").style.display = "none";
    document.getElementById("maileror").style.display = "none";
    document.getElementById("phoneerror").style.display = "none";

    // Perform validation
    var valid = true;

    if (firstName.trim() === "") {
      valid = false;
      document.getElementById("nm1").style.display = "block";
    }

    if (lastName.trim() === "") {
      valid = false;
      document.getElementById("nm2").style.display = "block";
    }

    // You can add more validation for email, phone, budget, etc.

    if (email.trim() === "" || !validateEmail(email)) {
      valid = false;
      document.getElementById("maileror").style.display = "block";
    }

    if (phone.trim() === "" || !validatePhone(phone)) {
      valid = false;
      document.getElementById("phoneerror").style.display = "block";
    }

    if (budget.trim() === "" || isNaN(budget) || parseFloat(budget) < 5) {
      valid = false;
      // Display an error message for budget
    }

    if (!agreeChecked) {
      valid = false;
      // Display an error message for agreeing to terms
    }

    // If all validations pass, you can submit the form or proceed to the next step
    if (valid) {
      // Add any additional logic here, such as form submission or moving to the next step
 document.getElementById("step2").style.display="block"
 document.getElementById("step1").style.display="none"
    }
  }

  function validateEmail(email) {
    // Add your email validation logic here
    // You might want to use a regular expression or other validation methods
    return true; // Placeholder return value
  }

  function validatePhone(phone) {
    // Add your phone number validation logic here
    // You might want to use a regular expression or other validation methods
    return true; // Placeholder return value
  }



//form function
function test2() {
  // Get form input values for step 2
  var projectTitle = document.getElementById("projectTitle").value;
  var videoEditingType = document.getElementById("videoEditingTypes").value;
  var deadline = document.getElementById("deadline").value;
  var duration = document.getElementsByName("duration")[0].value;
  var reference = document.getElementsByName("Refrence")[0].value;

  // Reset error messages
  document.getElementById("projecterror").style.display = "none";
  document.getElementById("dateerror").style.display = "none";
  document.getElementById("durationerror").style.display = "none";

  // Perform validation
  var valid = true;

  // You can add more validation for project title, video editing type, deadline, duration, reference, etc.
  if (projectTitle.trim() === "") {
    valid = false;
    document.getElementById("projecterror").style.display = "block";
  }

  if (deadline.trim() === "") {
    valid = false;
    document.getElementById("dateerror").style.display = "block";
  }

  if (duration.trim() === "" || isNaN(duration) || parseFloat(duration) < 30 || parseFloat(duration) > 28800) {
    valid = false;
    document.getElementById("durationerror").style.display = "block";
  }

  // If all validations pass, you can submit the form or proceed to the next step
  if (valid) {
    // Add any additional logic here, such as form submission or moving to the next step
    document.getElementById("step2").style.display="none"
    document.getElementById("step1").style.display="none"
    document.getElementById("step3").style.display="block"
  }
}
function webtype() {
  // Resetting previous error messages
  document.getElementById("projecterror").style.display = "none";
  document.getElementById("dateerror").style.display = "none";
  document.getElementById("durationerror").style.display = "none";

  // Validating Project Title
  var projectTitle = document.getElementById("projectTitle").value;
  if (projectTitle.trim() === "") {
      document.getElementById("projecterror").style.display = "block";
      return;
  }

  // Validating Project Deadline
  var deadline = document.getElementById("deadline").value;
  if (!isValidDate(deadline)) {
      document.getElementById("dateerror").style.display = "block";
      return;
  }

  // Validating Number of Pages
  var pages = document.getElementsByName("Pages")[0].value;
  if (isNaN(pages) || pages < 1 || pages > 20) {
      document.getElementById("durationerror").style.display = "block";
      return;
  }

  // If all validations pass
  var valid = true;

    // Add any additional logic here, such as form submission or moving to the next step
    document.getElementById("step3").style.display = "block";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step1").style.display = "none";

}

// Function to check if the input is a valid date
function isValidDate(dateString) {
    var regex = /^\d{4}-\d{2}-\d{2}$/;
    return dateString.match(regex) !== null;
}






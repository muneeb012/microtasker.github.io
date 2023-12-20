
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

function step3() {
  let pages = document.getElementById("pages").value;
  let budgets = document.getElementById("budgets").value;
  let sections = document.getElementById("section").value;
  let date = document.getElementById("time").value;

  // error elements
  let page = document.getElementById("pager");
  let budget = document.getElementById("budget");
  let section = document.getElementById("sections");
  let time = document.getElementById("timer");
  var deadlineInput = document.getElementById("time");
  var timerError = document.getElementById("timer");


  // Reset error messages
  page.style.display = "none";
  budget.style.display = "none";
  section.style.display = "none";
  time.style.display = "none";

  if (budgets < 5) {
    budget.style.display = "inline";
  } else {
    if (pages === "" || pages < 1) {
      page.style.display = "inline";
    } else {
      page.style.display = "none";
    }

    if (pages >= 20) {
      page.style.display = "none";
    }

    if (sections === "" || sections < 1) {
      section.style.display = "inline";
    } else if (sections <= 10) {
      section.style.display = "none";
      if (deadlineInput.value === "") {
        timerError.style.display = "block"; // Display the error message
      } else {
        timerError.style.display = "none";
      }


    }
    // Check if all conditions are met
    if (page.style.display === "none" && budget.style.display === "none" && section.style.display === "none" && timerError.style.display === "none") {
      // All conditions are met, so redirect to another page
      window.location.href = "about-project.html"; // Replace with your desired page URL
    }

  }

}

// step4
function validateForm() {
  var descriptionTextarea = document.getElementById("description");
  var descriptionError = document.getElementById("descriptionError");

  // Check if the textarea has at least 50 words
  var wordCount = descriptionTextarea.value.split(/\s+/).filter(Boolean).length;
  if (wordCount < 50) {
    descriptionError.style.display = "block"; // Display the error message
    return false; // Prevent form submission
  } else {
    descriptionError.style.display = "none"; // Hide the error message
    return true; // Allow form submission
  }
}
// video 
function vide() {
  const videoType = document.getElementById('video-type').value;
  const budget = document.getElementById('budget').value;
  const length = document.getElementById('length').value;
  const deadline = document.getElementById('deadline').value;

  let valid = true;

  // Validate Video Type
  if (videoType === 'Other') {
    const otherType = document.getElementById('other').value.trim();
    if (!otherType) {
      valid = false;
      document.getElementById('other').classList.add('error');
    } else {
      document.getElementById('other').classList.remove('error');
    }
  }

  // Validate Budget
  if (budget < 5) {
    valid = false;
    document.getElementById('budgetError').style.display = 'block';
  } else {
    document.getElementById('budgetError').style.display = 'none';
  }

  // Validate Length
  if (length < 30 || length > 10800) {
    valid = false;
    document.getElementById('lengthError').style.display = 'block';
  } else {
    document.getElementById('lengthError').style.display = 'none';
  }

  // Validate Deadline
  if (!deadline) {
    valid = false;
    document.getElementById('deadlineError').style.display = 'block';
  } else {
    document.getElementById('deadlineError').style.display = 'none';
  }

  // Check if all fields are valid
  if (valid) {
    // Optionally, submit the form to the server
    document.getElementById('video-form').submit();

    // Redirect to the next page
    window.location.href = 'about-project.html'; // Replace 'next-page.html' with your desired destination
  }
}


// graphic
function graphic1() {
  const designType = document.getElementById('design-type').value;
  const budget = document.getElementById('budget').value;
  const numberOfDesigns = document.getElementById('number-of-designs').value;
  const deadline = document.getElementById('deadline').value;

  let valid = true;

  // Design Type validation
  if (designType === 'Other') {
    const otherDesignType = document.getElementById('other-design-type').value.trim();
    if (!otherDesignType) {
      valid = false;
      document.getElementById('other-design-type').classList.add('error');
    } else {
      document.getElementById('other-design-type').classList.remove('error');
    }
  }

  // Budget validation
  if (budget < 5) {
    valid = false;
    document.getElementById('budget-error').style.display = 'block';
  } else {
    document.getElementById('budget-error').style.display = 'none';
  }

  // Number of Designs validation
  if (numberOfDesigns < 20) {
    valid = false;
    document.getElementById('designs-error').style.display = 'block';
  } else {
    document.getElementById('designs-error').style.display = 'none';
  }

  // Deadline validation
  if (!deadline) {
    valid = false;
    document.getElementById('deadline-error').style.display = 'block';
  } else {
    document.getElementById('deadline-error').style.display = 'none';
  }

  // Check if all fields are valid and filled
  if (valid && designType && budget && numberOfDesigns && deadline) {
    // Redirect to another page
    window.location.href = 'about-project.html'; // Replace 'another-page.html' with your desired destination
  }
}

document.getElementById('design-type').addEventListener('change', function () {
  const otherDesignTypeInput = document.getElementById('other-design-type');
  if (this.value === 'Other') {
    otherDesignTypeInput.style.display = 'block';
    otherDesignTypeInput.setAttribute('required', 'required');
  } else {
    otherDesignTypeInput.style.display = 'none';
    otherDesignTypeInput.removeAttribute('required');
  }
});

//photo
function photo() {
  const editingType = document.getElementById('editing-type').value;
  const budget = document.getElementById('budget').value;
  const numberOfImages = document.getElementById('number-of-images').value;
  const deadline = document.getElementById('deadline').value;

  let valid = true;

  // Editing Type validation
  if (editingType === 'Other') {
    const otherEditingType = document.getElementById('other-editing-type').value.trim();
    if (!otherEditingType) {
      valid = false;
      document.getElementById('other-editing-type').classList.add('error');
    } else {
      document.getElementById('other-editing-type').classList.remove('error');
    }
  }

  // Budget validation
  if (budget < 5) {
    valid = false;
    document.getElementById('budget-error').style.display = 'block';
  } else {
    document.getElementById('budget-error').style.display = 'none';
  }

  // Number of Images validation
  if (numberOfImages <= 0 || numberOfImages > 100) {
    valid = false;
    document.getElementById('images-error').style.display = 'block';
  } else {
    document.getElementById('images-error').style.display = 'none';
  }

  // Deadline validation
  if (!deadline) {
    valid = false;
    document.getElementById('deadline-error').style.display = 'block';
  } else {
    document.getElementById('deadline-error').style.display = 'none';
  }

  // Check if all fields are valid and filled
  if (valid && editingType && budget && numberOfImages && deadline) {
    // Redirect to another page
    window.location.href = 'about-project.html'; // Replace 'another-page.html' with your desired destination
  }
}


document.getElementById('editing-type').addEventListener('change', function () {
  const otherEditingTypeInput = document.getElementById('other-editing-type');
  if (this.value === 'Other') {
    otherEditingTypeInput.style.display = 'block';
    otherEditingTypeInput.setAttribute('required', 'required');
  } else {
    otherEditingTypeInput.style.display = 'none';
    otherEditingTypeInput.removeAttribute('required');
  }
});
//whiteboard
function validateAndProceed2() {
  const animationType = document.getElementById('animation-type').value;
  const budget = document.getElementById('budget').value;
  const duration = document.getElementById('duration').value;
  const deadline = document.getElementById('deadline').value;

  let valid = true;

  // Animation Type validation
  if (animationType === 'Other') {
    const otherAnimationType = document.getElementById('other-animation-type').value.trim();
    if (!otherAnimationType) {
      valid = false;
      document.getElementById('other-animation-type').classList.add('error');
    } else {
      document.getElementById('other-animation-type').classList.remove('error');
    }
  }

  // Budget validation
  if (budget < 5) {
    valid = false;
    document.getElementById('budget-error').style.display = 'block';
  } else {
    document.getElementById('budget-error').style.display = 'none';
  }

  // Duration validation
  if (duration < 30 || duration > 600) {
    valid = false;
    document.getElementById('duration-error').style.display = 'block';
  } else {
    document.getElementById('duration-error').style.display = 'none';
  }

  // Deadline validation
  if (!deadline) {
    valid = false;
    document.getElementById('deadline-error').style.display = 'block';
  } else {
    document.getElementById('deadline-error').style.display = 'none';
  }

  // Check if all fields are valid
  if (valid) {
    // Check if all input fields are filled
    const allFieldsFilled = animationType && budget && duration && deadline;
    if (allFieldsFilled) {
      // Redirect to another page
      window.location.href = 'about-project.html'; // Replace 'another-page.html' with your desired destination
    }
  }
}

document.getElementById('animation-type').addEventListener('change', function () {
  const otherAnimationTypeInput = document.getElementById('other-animation-type');
  if (this.value === 'Other') {
    otherAnimationTypeInput.style.display = 'block';
    otherAnimationTypeInput.setAttribute('required', 'required');
  } else {
    otherAnimationTypeInput.style.display = 'none';
    otherAnimationTypeInput.removeAttribute('required');
  }
});

// video 2
function video2() {
  let name = document.getElementById("names").value
  let error = document.getElementById("nm1");
  let lastname = document.getElementById("lastname").value;
  let error2 = document.getElementById("nm2")
  let x = document.getElementById("mail").value
  let y = document.getElementById("maileror")
  let c = document.getElementById("phone").value
  let d = document.getElementById("phoneerror")
  const arr = [name, lastname, x, c]
  const errors = [error, error2, d, y]
  if (name == "") {
    error.style.display = "inline"
  }
  else if (name !== "") {
    if (lastname == "") {
      error2.style.display = "inline"
    }
    else if (lastname !== "") {
      if (x == "") {
        y.style.display = "inline"
      }
      else if (x !== "") {
        if (c == "") {
          d.style.display = "inline"
        }
        else if (arr != "") {
          location.href = "video.html"
        }
      }
    }
  }
  if (arr == "") {
    error.style.display
  }
}
// graphic
function graphic() {
  let name = document.getElementById("names").value
  let error = document.getElementById("nm1");
  let lastname = document.getElementById("lastname").value;
  let error2 = document.getElementById("nm2")
  let x = document.getElementById("mail").value
  let y = document.getElementById("maileror")
  let c = document.getElementById("phone").value
  let d = document.getElementById("phoneerror")
  const arr = [name, lastname, x, c]
  const errors = [error, error2, d, y]
  if (name == "") {
    error.style.display = "inline"
  }
  else if (name !== "") {
    if (lastname == "") {
      error2.style.display = "inline"
    }
    else if (lastname !== "") {
      if (x == "") {
        y.style.display = "inline"
      }
      else if (x !== "") {
        if (c == "") {
          d.style.display = "inline"
        }
        else if (arr != "") {
          location.href = "graphic.html"
        }
      }
    }
  }
  if (arr == "") {
    error.style.display
  }
}
//whiteboad
function white() {
  let name = document.getElementById("names").value
  let error = document.getElementById("nm1");
  let lastname = document.getElementById("lastname").value;
  let error2 = document.getElementById("nm2")
  let x = document.getElementById("mail").value
  let y = document.getElementById("maileror")
  let c = document.getElementById("phone").value
  let d = document.getElementById("phoneerror")
  const arr = [name, lastname, x, c]
  const errors = [error, error2, d, y]
  if (name == "") {
    error.style.display = "inline"
  }
  else if (name !== "") {
    if (lastname == "") {
      error2.style.display = "inline"
    }
    else if (lastname !== "") {
      if (x == "") {
        y.style.display = "inline"
      }
      else if (x !== "") {
        if (c == "") {
          d.style.display = "inline"
        }
        else if (arr != "") {
          location.href = "whiteboard.html"
        }
      }
    }
  }
  if (arr == "") {
    error.style.display
  }
}
//photo
function photo2() {
  let name = document.getElementById("names").value
  let error = document.getElementById("nm1");
  let lastname = document.getElementById("lastname").value;
  let error2 = document.getElementById("nm2")
  let x = document.getElementById("mail").value
  let y = document.getElementById("maileror")
  let c = document.getElementById("phone").value
  let d = document.getElementById("phoneerror")
  const arr = [name, lastname, x, c]
  const errors = [error, error2, d, y]
  if (name == "") {
    error.style.display = "inline"
  }
  else if (name !== "") {
    if (lastname == "") {
      error2.style.display = "inline"
    }
    else if (lastname !== "") {
      if (x == "") {
        y.style.display = "inline"
      }
      else if (x !== "") {
        if (c == "") {
          d.style.display = "inline"
        }
        else if (arr != "") {
          location.href = "photo.html"
        }
      }
    }
  }
  if (arr == "") {
    error.style.display
  }
}
// lastpage
function thanks() {
  let description = document.getElementById("description").value
  let file = document.getElementById("file").value
  //errors
  let des_error = document.getElementById("des-error")
  let file_error = document.getElementById("file-error")
  if (description == "" && description < 150) {
    des_error.style.display = "block"
  }
  if (file == "") {
    file_error.style.display = "block"
  }
  else {
    location.href = "thanks.html"
  }
}


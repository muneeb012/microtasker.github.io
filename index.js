// function for open responsive menu on mobile
function mobile() {
    let a = document.getElementById("navm")
    if (a.style.display = "none") {
      a.style.display = "flex"
    }
  
  }
  // function for close responsive menu
  function closer() {
    document.getElementById("navm").style.display = "none"
    document.getElementById("navm").style.animation = `nav 1s ease 0s 1 normal forwards;`
  
  }
  // form function
  function step2() {
    location.href = "Forms/step2.html"
  }
  
  function step1() {
    alert("done")
  }
  // portfolio
  function showbtn(imageElement) {
    let showButton = document.getElementById("show");
    showButton.style.display = "block";
  }
  function hidebtn() {
    let showButton = document.getElementById("show");
    showButton.style.display = "block";
  }
  // open a menu for other platforms
  function fiver() {
    let fiver = document.getElementById("others")
    fiver.style.display = "block"
  }
  // /portfolio page
  function web() {
    document.getElementById("web").style.display = "block"
    document.getElementById("videos").style.display = "none"
    document.getElementById("white").style.display = "none"
    document.getElementById("graphic").style.display = "none"
    document.getElementById("c1").style.color = "#40E15D"
    document.getElementById("c2").style.color = "black"
    document.getElementById("c3").style.color = "black"
    document.getElementById("c4").style.color = "black"
  }
  // video
  function video() {
    document.getElementById("web").style.display = "none"
    document.getElementById("videos").style.display = "block"
    document.getElementById("white").style.display = "none"
    document.getElementById("graphic").style.display = "none"
    document.getElementById("c2").style.color = "#40E15D"
    document.getElementById("c1").style.color = "black"
    document.getElementById("c3").style.color = "black"
    document.getElementById("c4").style.color = "black"
  }
  // graphic
  function graphic() {
    document.getElementById("web").style.display = "none"
    document.getElementById("videos").style.display = "none"
    document.getElementById("white").style.display = "none"
    document.getElementById("graphic").style.display = "block"
    document.getElementById("c3").style.color = "#40E15D"
    document.getElementById("c2").style.color = "black"
    document.getElementById("c1").style.color = "black"
    document.getElementById("c4").style.color = "black"
  }
  //white
  function white() {
    document.getElementById("web").style.display = "none"
    document.getElementById("videos").style.display = "none"
    document.getElementById("white").style.display = "block"
    document.getElementById("graphic").style.display = "none"
    document.getElementById("c4").style.color = "#40E15D"
    document.getElementById("c2").style.color = "black"
    document.getElementById("c3").style.color = "black"
    document.getElementById("c1").style.color = "black"
  }
  // pricing page js
  function changeInputValue() {
    // Get the input element by its id
    const packageInput = document.getElementById('package-input');
  
    // Set a new value for the input field
    packageInput.value = 'Hello-world';
  }
  // Logic for fotter
  function year() {
    // Create a new Date object
    let currentDate = new Date();
  
    // Get the current year
    let currentYear = currentDate.getFullYear();
  
    // Display the current year
    console.log("The current year is: " + currentYear);
  
    // Update content of elements with class name "credit"
    let elements = document.getElementsByClassName("credit");
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "&copy; Copyright Microtasker " + currentYear;
    }
  }
  
  // Call the function once the document is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    year(); // Call the function
  });
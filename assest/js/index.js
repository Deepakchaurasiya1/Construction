// About Section Button Click on Content Change
function changeContent(newContent) {
  document.getElementById("content").innerHTML = newContent;
}
function changeColor(button) {
  // Remove active class from all buttons
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.classList.remove("activebtn");
  });
  // Add active class to the clicked button
  button.classList.add("activebtn");

  // Get the content associated with the clicked button and display it
  var content = button.getAttribute("data-content");
  document.getElementById("content").innerHTML = content;
}

// Fixed Button Bottom to Top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopButton").style.display = "block";
  } else {
    document.getElementById("scrollToTopButton").style.display = "none";
  }
}

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

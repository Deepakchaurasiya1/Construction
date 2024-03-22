// About Section Button Click on Content Change
function changeContent(newContent) {
    document.getElementById("content").innerHTML = newContent;
}
function changeColor(button) {
    // Remove active class from all buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('activebtn');
    });
    // Add active class to the clicked button
    button.classList.add('activebtn');
    
    // Get the content associated with the clicked button and display it
    var content = button.getAttribute('data-content');
    document.getElementById("content").innerHTML = content;
}
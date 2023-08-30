function subscribed(clickedElement) {
  // Change background color to green
  clickedElement.style.backgroundColor = "darkgreen";
  clickedElement.style.color = "white";
  clickedElement.style.fontSize = "120%";

  // Change text inside the <p> tag within the clicked <div>
  clickedElement.getElementsByTagName("p")[0].innerText = "Awaiting Payment";
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}